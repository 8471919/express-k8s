FROM node:20-alpine

COPY . .

RUN npm install -g npm@latest && npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]