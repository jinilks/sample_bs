# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install Node.js dependencies
RUN yarn install 

# Copy the rest of the application source code to the container
COPY . .

# Expose port 3001 for the container
EXPOSE 3001

# Create a new user "appuser" and avoid running the app as root for security
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Change the ownership of the /app directory to appuser
RUN chown -R appuser:appuser /app

# Switch to 'appuser'
USER appuser

# Set the default command to run when the container starts
CMD ["yarn", "start"]
