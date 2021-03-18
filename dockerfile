FROM node
WORKDIR /app
COPY . .
RUN npm install -g typescript ts-node --save-dev @types/node @types/mocha
CMD ["ts-node", "script.ts"]