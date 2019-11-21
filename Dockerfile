FROM node:10

WORKDIR /app
COPY package.json /app
RUN yarn install

CMD ["yarn", "start"]
