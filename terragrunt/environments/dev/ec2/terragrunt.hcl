include "root" {
  path = find_in_parent_folders()
}

include "envcommon" {
  path = "${dirname(find_in_parent_folders())}/_envcommon/ec2.hcl"
}

locals {
  env_vars = read_terragrunt_config(find_in_parent_folders("env.hcl"))
}

dependency "vpc" {
  config_path = "../vpc"
  mock_outputs = {
    vpc_id              = "temporary-vpc-id"
    public_subnets      = ["temporary-subnet-id"]
    default_security_group_id = "temporary-sg-id"
  }
  mock_outputs_allowed_terraform_commands = ["init", "plan", "validate"]
}

inputs = {
  name = "k3s-server"
  key_name = "doqr-demo"
  instance_type = "t2.micro"
  ami          = "ami-0c7217cdde317cfec"  # Ubuntu 22.04 LTS in us-east-1
  
  subnet_id     = dependency.vpc.outputs.public_subnets[0]

  associate_public_ip_address = true 

  vpc_security_group_ids = [dependency.vpc.outputs.default_security_group_id]
  
  user_data = <<-EOF
#!/bin/bash
set -ex

# Log all output
exec > >(tee /var/log/user-data.log | logger -t user-data -s 2>/dev/console) 2>&1

# Install k3s
curl -sfL https://get.k3s.io | sh -

# Wait for k3s to become ready
while [ ! -f /etc/rancher/k3s/k3s.yaml ]; do
  sleep 1
done

# Install kubectl
KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)
curl -LO "https://dl.k8s.io/release/$KUBECTL_VERSION/bin/linux/amd64/kubectl"
chmod +x kubectl
mv kubectl /usr/local/bin/

# Configure kubeconfig for ubuntu user
mkdir -p /home/ubuntu/.kube
cp /etc/rancher/k3s/k3s.yaml /home/ubuntu/.kube/config
chown -R ubuntu:ubuntu /home/ubuntu/.kube
chmod 644 /home/ubuntu/.kube/config

# Install K9s
K9S_VERSION="v0.27.4"
curl -sSLo /tmp/k9s.tar.gz "https://github.com/derailed/k9s/releases/download/$K9S_VERSION/k9s_Linux_amd64.tar.gz"
tar -xzf /tmp/k9s.tar.gz -C /tmp
mv /tmp/k9s /usr/local/bin/k9s
chown ubuntu:ubuntu /usr/local/bin/k9s
chmod +x /usr/local/bin/k9s

# Ensure cluster is reachable with kubectl
until kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get nodes; do
  sleep 2
done

# Deploy the application
kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml apply -f - <<MANIFEST
apiVersion: apps/v1
kind: Deployment
metadata:
  name: doqr-front
  labels:
    app: doqr-front
spec:
  replicas: 2
  selector:
    matchLabels:
      app: doqr-front
  template:
    metadata:
      labels:
        app: doqr-front
    spec:
      containers:
      - name: doqr-front
        image: ghcr.io/nt-pissarra/doqr-front:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: doqr-front-service
spec:
  type: LoadBalancer
  selector:
    app: doqr-front
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
MANIFEST
EOF


              
  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}