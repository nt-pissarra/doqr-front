# Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files
COPY --from=builder ../next.config.js ./
COPY --from=builder ../public ./public
COPY --from=builder ../.next/standalone ./
COPY --from=builder ../.next/static ./.next/static

# Start the app
EXPOSE 3000
CMD ["node", "server.js"]