# M-347 - Container Solution in [Docker](https://docker.com) with [NGINX](https://nginx.com)

## Content

- [M-347 - Container Solution in Docker with NGINX](#m-347---container-solution-in-docker-with-nginx)
  - [Content](#content)
  - [Description](#description)
  - [Good to know](#good-to-know)
  - [How To Run](#how-to-run)

---

## Description

This is a simple container solution for the Module 347. It is based on the [official NGINX Docker image](https://hub.docker.com/_/nginx). The container is configured to serve the static content of the `html` folder. The `html` folder is mounted as a volume. This means that you can change the content of the `html` folder on your local machine and the changes will be reflected in the container.

---

## Good to know

Simply fork this repository and clone it to your local machine. Then you can change the content of the `html` folder and commit the changes to your forked repository. This way you can easily share your solution with your colleagues.

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
