FROM node AS build

WORKDIR /home/app/frontend

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

# Copy built files
COPY --from=build /home/app/frontend/dist /usr/share/nginx/html
# Copy custom nginx config for SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD [ "nginx","-g","daemon off;" ]
