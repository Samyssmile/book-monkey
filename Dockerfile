FROM node:16.16.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build-prod
FROM nginx:latest
COPY --from=build-step /app/dist/book-monkey /usr/share/nginx/html
EXPOSE 80


