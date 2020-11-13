FROM node:alpine AS appbuild
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci --production
COPY --from=appbuild /usr/src/app/dist ./dist
EXPOSE 8080
CMD ["node", "dist/main.js"]