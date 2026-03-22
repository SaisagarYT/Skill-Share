FROM node:18

ENV PORT=5000

WORKDIR /home/app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "index.js" ]