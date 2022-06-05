FROM node:16.15.0-alpine3.14
RUN mkdir /app

WORKDIR /app
COPY  . /app/
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm","run", "start:dev" ]