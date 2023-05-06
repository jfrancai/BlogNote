# BlogNote

This repo is an almost vanilla NodeJS server that serve static web page of my notes.

## Local install

First install npm package and build the site :

```bash
npm install

npm run build
```

Then start the local npm server :

```bash
npm run start
```

Alternatively you can use the Docker image :

```bash
docker build -t blognote .

docker run -t -p 8080:8080 --name=blognote blognote:latest npm run start
```
