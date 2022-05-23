FROM node:16-alpine3.12

WORKDIR /App

COPY ./package.json /App/

COPY ./package-lock.json /App/

RUN npm install

COPY ./ /App/

CMD ["npm","start"]