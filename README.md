# M-347

### Container Solution in [Docker](https://docker.com) with [NGINX](https://nginx.com).

---

## How To Run

If you want to run the Docker container locally, simply use the following command:

```shell
docker build -t m-347 .
```

to build the container. Then run it with:

```shell
docker run -d -p <defined port>:80 m-347
```

You can decide which port you want to use on your local machine. Inside the container, the port is always `80`.

Now open your browser and go to `http://localhost:<defined port>`.

---
