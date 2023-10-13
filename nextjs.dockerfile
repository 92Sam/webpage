# Create Node Image For build Image React App
FROM node:18-alpine AS builder_react

ARG NODE_ENV=production
# Expose the listening port
EXPOSE 3000

WORKDIR /app
COPY . ./

RUN npm install
RUN npm run build
ENTRYPOINT ["npm", "run", "start"]