FROM node
WORKDIR /app
COPY . .
RUN npm install -g typescript --save-dev @types/node @types/mocha
CMD ["node", "word_english.js"]