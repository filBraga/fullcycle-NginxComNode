# Use the official Node.js image as the base image
# M1, M2 Mac: 
FROM  node:18.20.4-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN apk update && apk add bash 
RUN npm install

# Copy the application files
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD [ "node", "index.js" ]