FROM node AS build

WORKDIR /home/app/frontend

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /home/app/frontend/dist /usr/share/nginx/html

EXPOSE 8080

RUN sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf

CMD [ "nginx","-g","daemon off;" ]
