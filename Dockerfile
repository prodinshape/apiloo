FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn nx build apilooback
CMD [ "node", "dist/apps/apilooback/main.js" ]
