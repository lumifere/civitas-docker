FROM node:alpine
WORKDIR /usr/app-back
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD npm run migrate && npm run dev