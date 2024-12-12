terraform {
  source = "tfr:///terraform-aws-modules/vpc/aws?version=5.16.0"
}

inputs = {
  
  # Minimal settings for demo
  enable_nat_gateway     = false  # Remove NAT Gateway cost
  enable_dns_hostnames   = true
  enable_dns_support     = true
}
