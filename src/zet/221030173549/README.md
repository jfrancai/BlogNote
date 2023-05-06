## Dockerfile and Docker Image

* The Dockerfile is a configuration file that automates the steps of creating a Docker image.
* It is similar to a Makefile.
* Docker reads instructions from the Dockerfile to automate the steps otherwise performed manually to create an image.
* To build an image, create a file called Dockerfile.
* The Dockerfile describes the steps taken to assemble the image.
* When the Dockerfile  has  been created, call the docker build command, using the path of directory that contains Dockerfile as the argument.


```
	RUN: run a cmd
	ENV: env variables
	EXPOSE: ports exposition
	VOLUME: volume definition
	COPY: cp between host and the container
	...
```

```bash
FROM alpine:latest
MAINTAINER jfrancai
RUN apt-get update \
&& apt-get install -y vim git \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

```bash
docker build -t imagename:version .
```

> do not forget the dot

List images:
```bash
docker image ls
```

Show the history of an image:
```bash
docker history myimage:latest
```

Remove one or more images:
```bash
docker rmi monimage:v1.0
```

> You have do delete all container that use your image before being able to actually delete the image.

    #docker #dockerimage #dockerfile
