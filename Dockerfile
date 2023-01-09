FROM node:18

RUN mkdir -p /usr/source/app

WORKDIR /usr/source/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]