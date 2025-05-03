# backend/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000
# This Dockerfile is for a Node.js backend application. It uses the official Node.js 18 image as the base image, sets the working directory to /app, copies the package.json and package-lock.json files, installs the dependencies, copies the rest of the application code, and finally runs the application using node index.js. The container exposes port 3000 for incoming requests.
