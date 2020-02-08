FROM node:12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git
RUN npm install -g typescript
RUN npm install -g nodemon

COPY ./_Docker/entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh