FROM node:22
WORKDIR /mounted-data-discovery
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
