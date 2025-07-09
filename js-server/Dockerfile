# Simple Dockerfile for JS Express server
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 8001
CMD ["yarn", "start"]
