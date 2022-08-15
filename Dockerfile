FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run nx build apilooback
CMD [ "node", "dist/apps/apilooback/main.js" ]
