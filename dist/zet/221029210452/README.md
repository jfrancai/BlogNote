## Mount a Persistent Volume

Start one or more stopped containers
```sh
docker start
```

Stop one or more running containers
```sh
docker stop
```

Remove one or more containers
```sh
docker rm
```

Persistent volume:
```sh
docker run -tid -p 8080:80 -v /srv/data/nginx:/usr/share/nginx/html --name web nginx:latest
```

    #docker
