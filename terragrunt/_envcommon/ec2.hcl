terraform {
  source = "tfr:///terraform-aws-modules/ec2-instance/aws?version=5.7.1"
}

inputs = {
  # Default settings
  create = true
}
