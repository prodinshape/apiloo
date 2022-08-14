FROM node:16 AS development
WORKDIR /usr/src/app
COPY package*.json ./
COPY apps/apilooback/.env ./
RUN npm install
COPY . .
RUN npm run build
FROM node:16 AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production --omit=dev
COPY --from=development /usr/src/app/dist ./dist
CMD ["npm", "run", "build-start-apilooback:dev"]
