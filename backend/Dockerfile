# Use official Node.js 18 Alpine image (lightweight)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 4000

# Start the app
CMD ["node", "index.js"]
