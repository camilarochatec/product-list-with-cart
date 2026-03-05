# Demo Terraform Bootcamp

terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
      version = "2.4.0"
    }
  }
}

provider "local" {}

resource "local_file" "infra_demo" {
  filename = "infra_terraform.txt"
  content  = "Infraestrutura criada automaticamente com Terraform."
}