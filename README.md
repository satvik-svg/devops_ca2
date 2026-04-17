# DevOps CA2 - Node.js API with CI/CD

This project provides a simple Express REST API and a complete CI/CD workflow.

## Endpoint

- `GET /health` returns server status.

## Run locally

```bash
npm install
npm start
```

Verify:

```bash
curl http://localhost:3000/health
```

## Run tests

```bash
npm test
```

## Docker

Build image:

```bash
docker build -t <dockerhub-username>/devops-ca2:latest .
```

Run container:

```bash
docker run -p 3000:3000 <dockerhub-username>/devops-ca2:latest
```

## CI/CD Workflow

The workflow file is at `.github/workflows/ci-cd.yml` and includes:

1. Install dependencies
2. Run tests
3. Build and push Docker image to Docker Hub
4. Trigger cloud deploy webhook

## Required GitHub Secrets

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `CLOUD_DEPLOY_HOOK_URL` (optional but required for deployment step)

## Required pipeline trigger commit message

Use this exact commit message to trigger your final required run:

`This is the new CI/CD pipeline for CA2`
