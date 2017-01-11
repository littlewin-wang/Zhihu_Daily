FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# To build the dist file
RUN npm run build

CMD ["node", "api.server.js"]

EXPOSE 80

CMD ["node", "prod.server.js"]
