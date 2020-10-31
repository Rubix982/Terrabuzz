FROM node

WORKDIR /Backend

COPY ./package.json /Backend/

COPY ./package-lock.json /Backend/

RUN npm install

COPY ./ /Backend/

RUN npm install pm2 -g

CMD ["pm2-runtime", "ecosystem.config.js"]