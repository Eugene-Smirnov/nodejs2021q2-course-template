FROM node:14.17.0-alpine3.13
WORKDIR /user/app
COPY package*.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]