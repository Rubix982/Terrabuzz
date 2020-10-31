FROM node as build-stage

WORKDIR /App

COPY ./client/package.json /App/

COPY ./client/package-lock.json /App/

RUN npm install

COPY ./client/ /App/

RUN npm run build

FROM nginx

RUN apt-get update && apt-get -y install nginx-extras

COPY --from=build-stage /App/build/ /usr/share/nginx/html


