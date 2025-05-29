# Dossier

Dossier for Sruthin Gaddam written using Astro

## Table of Contents

- [Application Urls](#application-urls)
- [Application Setup](#application-setup)
  - [Traefik Setup](#traefik-setup)
  - [Build Application](#build-application)
  - [Deploy Application](#deploy-application)

## Application Urls

- Development version of the application can be viewed at
    [gaddamsrdossier.devel.lib.msu.edu][devUrl]

## Application Setup

### Traefik Setup

- Create an external Docker network using.

```bash
docker network create --driver overlay proxy
```

- This will allow Traefik to communicate with other services that are also
connected to the `proxy` network.

#### Traefik Stack

- Traefik will the edge router for all the services in the `proxy` network. It
accepts all requests on port 443 and routes them to different services.
- Add SSL certs in `/etc/traefik` directory. This directory is mounted into the
`router_traefik` docker container.
- - The key file should be placed in `/etc/traefik/private/`.
- - The certificate file should be placed in `/etc/traefik/tls/.`
- - An addition config file should be placed in `/etc/traefik/conf.d/` which
informs Traefik about the location of the key and certificate file. Name the file
as `dynamic.yml`.Contents of the file should include

```yml
tls:
  certificates:
    - certFile: /etc/traefik/tls/{replace_with_crt_file_name}.crt
      keyFile: /etc/traefik/private/{replace_with_key_file_name}.key
```

- Deploy the Traefik stack using the following command. The `docker-compose.proxy.yml`
file is located in this repository.

```bash
docker stack deploy -c docker-compose.proxy.yml router
```

### Build Application

- This application uses Docker Swarm, a container orchestration tool
to build and deploy the Astro app.
- Use the following command to build the app.

``` bash
docker build --target setup ./ -t dossier:latest
```

### Deploy Application

- Deploy the dossier app using docker swarm

``` bash
# Dev instance
APP_HOST=gaddamsrdossier.devel.lib.msu.edu docker stack deploy -c docker-compose.yml -c docker-compose.dev.yml  dossier

#Prod instance
APP_HOST=gaddamsrdossier.lib.msu.edu docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml dossier
```

- Host name for the app is configured in `astro.config.mjs`. Current configuration is documented below.

``` TypeScript
// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    site: template.website_url,
    base: template.base,
    server: {
        allowedHosts: ['gaddamsrdossier.devel.lib.msu.edu', 'gaddamsrdossier.lib.msu.edu']
    },
    devToolbar: {
        enabled: false
    }
});
```

[devUrl]: https://gaddamsrdossier.devel.lib.msu.edu

