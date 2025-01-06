FROM node:20

RUN mkdir -p /usr/src/docker-training

WORKDIR /usr/src/docker-training

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]