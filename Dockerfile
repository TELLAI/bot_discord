FROM node:latest

ENV NODE_ENV=development

WORKDIR /app

VOLUME /app

COPY . .

RUN npm init && npm install discord.js && npm install -g typescript && npm install weather-js

RUN npm install -g

CMD ["npm", "node"]