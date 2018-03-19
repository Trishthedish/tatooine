FROM node:9-alpine

ADD /frontend/package.json .
RUN yarn install

CMD echo "READY!"
