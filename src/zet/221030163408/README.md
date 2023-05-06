## Manage Docker Volume

* Data volumes persist data independent of a container's life cycle.
* When you delete a container, the Docker daemon does not delete any data volumes.
* You can share volumes across multiple containers.
* Moreover, you can share data volumes with other computing resources in your system.

Run:
```sh
docker volume
```

Create a new volume:
```sh
docker volume create myvolume
```

List volumes:
```sh
docker volume ls
```

Inspect volume:
```sh
docker volume inspect myvolume
```

How to mount a volume:
```sh
docker run -tid --name web -p 8080:80 --mount source=myvolume,target=/usr/share/nginx/html nginx:latest
```

Delete a volume:
```sh
docker rm myvolume
```

    #docker #dockervolume
