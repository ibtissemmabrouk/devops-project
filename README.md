# DevOps Project - Full CI/CD Pipeline with Docker and Terraform

![GitHub Actions CI](https://github.com/ibtissemmabrouk/devops-project/actions/workflows/ci.yml/)
![GitHub Actions CD](https://github.com/ibtissemmabrouk/devops-project/actions/workflows/cd.yml/)

A complete DevOps project demonstrating:
- **3-tier application architecture** (React frontend + Express backend)
- **Docker** containerization
- **CI/CD pipelines** with GitHub Actions
- **Infrastructure as Code (IaC)** using Terraform

## 📦 Prerequisites
- Git
- Node.js ≥18.x
- Docker
- Terraform ≥1.11.x

## 🚀 Quick Start

### 1. Clone the Repository
`
git clone https://github.com/ibtissemmabrouk/devops-project.git
cd devops-project
 `

 
 ### 2. Run with Docker

 #### Build and run backend
`
docker build -t my-backend ./backend
docker run -p 3000:3000 my-backend
`

#### Build and run frontend
`
docker build -t my-frontend ./frontend
docker run -p 5000:5000 my-frontend`

#### Access:

Frontend: http://localhost:5000

Backend API: http://localhost:3000/tasks

## 🛠️ Project Structure

![image](https://github.com/user-attachments/assets/a083794c-e897-42d4-933e-bd41c59e212c)

## 🔄 CI/CD Pipeline (GitHub Actions)
CI Workflow (ci.yml): Automatically builds Docker images on every push to main.

CD Workflow (cd.yml): Deploys containers to a production-like environment.

## ☁️ Infrastructure as Code (Terraform)
Deploy Docker containers using Terraform:

#### 1. Initialize Terraform:

`terraform init`

#### 2. Apply configuration:

`
terraform apply`

## Configures:
Docker images for frontend/backend

Containers with port mappings (3000/5000)

## 📚 Documentation
### Frontend Setup

`cd frontend`

`npm install`

`npm start`

### Backend Setup
`cd backend`

`npm install`

`npm start`

# Developed by Ibtissem Mabrouk
## Project for DevOps Course - S2 2024


## This README includes:
- Clear setup instructions
- Docker/Terraform commands
- CI/CD 
- Project structure overview

## Let me know if you need adjustments! 😊
