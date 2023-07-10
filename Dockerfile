FROM node
WORKDIR /src
COPY . .
EXPOSE 7576
CMD node service.js

