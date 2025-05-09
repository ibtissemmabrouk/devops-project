terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "npipe:////.//pipe//docker_engine"
}

# Image frontend
resource "docker_image" "frontend" {
  name = "my-frontend"
  build {
    context = "${path.module}/frontend"  # Use "context" instead of "path"
  }
}

# Image backend
resource "docker_image" "backend" {
  name = "my-backend"
  build {
    context = "${path.module}/backend"  # Use "context" instead of "path"
  }
}

# Container frontend
resource "docker_container" "frontend" {
  name  = "my-frontend"
  image = docker_image.frontend.image_id
  ports {
    internal = 5000
    external = 5000
  }
}

# Container backend
resource "docker_container" "backend" {
  name  = "my-backend"
  image = docker_image.backend.image_id
  ports {
    internal = 3000
    external = 3000
  }
}


