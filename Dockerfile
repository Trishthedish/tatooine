FROM node:9-alpine

RUN mkdir /frontend
WORKDIR /frontend

ADD ./frontend/package.json .
RUN yarn install

CMD echo "READY!"
