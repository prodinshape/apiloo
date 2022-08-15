FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./apps/apilooback/*env ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "node", "dist/apps/apilooback/main.js" ]
