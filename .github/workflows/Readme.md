# GitHub Actions Workflow: Build and Deploy Client Front-End

## Overview

This GitHub Actions workflow automates the process of building and deploying the client front-end Docker image. When changes are pushed to the `main` branch, the workflow triggers the build, pushes the Docker image to a private registry, and deploys the updated service on the server using Ansible.

## Workflow Triggers

The workflow is triggered by pushes to the `main` branch of the repository.

## Environment Variables

The workflow uses the following environment variables:

- `DOCKERFILE_PATH`: The path to the Dockerfile for building the client front-end image.
- `DOCKER_IMAGE_NAME`: The name of the client front-end Docker image.

## Secrets Configuration

Ensure that the following secrets are configured in the repository's GitHub settings:

- `DOCKER_USERNAME`: DockerHub username for logging in.
- `DOCKER_PASSWORD`: DockerHub password for logging in.
- `DOCKERFILES_REPO_PAT`: Personal access token for the Docker files repository.
- `SSH_HOST`: SSH host for connecting to the server.
- `SSH_USERNAME`: SSH username for connecting to the server.
- `SSH_PRIVATE_KEY`: SSH private key for authentication.

These secrets are essential for secure authentication and connection management during the workflow execution.

## Workflow Jobs

The workflow consists of the following jobs:

### Build

- **Checkout Repository**: Clones the repository to the workflow runner.
- **Cache Node Modules**: Caches the `node_modules` directory to speed up subsequent builds.
- **Update Repository on Server**: Connects to the server via SSH and updates the repository.
- **Login to DockerHub**: Logs in to DockerHub using the provided credentials.
- **Checkout Docker Files Repository**: Clones the Docker files repository to the workflow runner.
- **Build and Push**: Builds and pushes the client front-end Docker image to the private registry.
- **Execute Ansible via SSH**: Connects to the server via SSH and executes an Ansible playbook to deploy the client front-end service.

## Usage

- **Trigger the Workflow**: Push changes to the `main` branch of the repository to trigger the workflow.
- **Monitor Workflow Execution**: Observe the workflow execution in the GitHub Actions tab of the repository to ensure successful builds and deployments.
- **Inspect Logs**: Review logs for each job step in the workflow for troubleshooting and ensuring proper execution.

## Conclusion

This workflow streamlines the process of building and deploying the client front-end Docker image, automating deployments on the server and ensuring consistent and up-to-date services. Adjust the environment variables and secrets as needed for your specific deployment scenario.
