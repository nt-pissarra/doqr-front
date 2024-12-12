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
  
  instance_type = "t2.micro"
  ami          = "ami-0c7217cdde317cfec"  # Ubuntu 22.04 LTS in us-east-1
  
  subnet_id     = dependency.vpc.outputs.public_subnets[0]

  associate_public_ip_address = true 

  vpc_security_group_ids = [dependency.vpc.outputs.default_security_group_id]
  
  user_data = <<-EOF
        #!/bin/bash

        # Log all output
        exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

        # Install k3s
        curl -sfL https://get.k3s.io | sh -

        # Wait for k3s to be ready
        while ! test -f /etc/rancher/k3s/k3s.yaml; do
        sleep 1
        done

        # Install kubectl
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        chmod +x kubectl
        mv kubectl /usr/local/bin/

        # Copy kubeconfig to ubuntu user's home
        mkdir -p /home/ubuntu/.kube
        cp /etc/rancher/k3s/k3s.yaml /home/ubuntu/.kube/config
        chown -R ubuntu: /home/ubuntu/.kube
        chmod 644 /home/ubuntu/.kube/config

        # Install k9s
        curl -sS https://webinstall.dev/k9s | bash
        # Make k9s available for ubuntu user
        cp /root/.local/bin/k9s /usr/local/bin/
        chown ubuntu: /usr/local/bin/k9s

        EOF
              
  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}