## Docker Environment Variables

Using cmd line args:
```sh
docker run -tid --name testenv --env VAR="toto" alpine:latest
```

Using env file:
```sh
docker run -tid --name testenv --env-file vars_env.lst alpine:latest
```

Modifying default docker hostname:
```sh
docker run -tid --name testenv --hostname jfrancai alpine:latest
```

    #docker #env
