# Build the Astro application
FROM node:bookworm AS setup
# Copy /app to /app
COPY ./app /app
WORKDIR /app
# Install dependencies
RUN npm install
# Build the application
RUN npm run build

