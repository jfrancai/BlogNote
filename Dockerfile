FROM node:16-alpine

WORKDIR /home/node

COPY --chown=node package*.json ./

RUN su -s /bin/sh node -c "npm ci --omit=dev" 

COPY --chown=node dist/ ./dist

EXPOSE 8080
