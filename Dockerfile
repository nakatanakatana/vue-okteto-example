FROM node:12-alpine as dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
