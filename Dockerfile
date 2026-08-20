# Build the Vite application
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies before copying application files to maximize Docker cache reuse.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Serve the static production build with Nginx.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
