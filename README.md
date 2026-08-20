# Agnik Bishi - Portfolio

A responsive personal portfolio for an aspiring Software Engineer focused on machine learning, generative AI, and agentic systems.

## Highlights

- Animated, responsive React interface with light and dark modes
- Projects, skills, experience, contact form, and interactive blog articles
- Downloadable resume and production-ready Docker deployment

## Run locally

```bash
npm ci
npm run dev
```

## Deploy with Docker

```bash
docker build -t agnik-portfolio .
docker run --rm -p 8080:80 agnik-portfolio
```

Open `http://localhost:8080` after the container starts.
