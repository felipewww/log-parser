# Quake3 log parser

### Getting started

This app parses a Quake3 game log about every match retrieving information about players like kills, deaths and so on.

### Prerequisites

- ##### Docker and docker-compose
    - https://docs.docker.com/compose/install/

- ##### Husky
    - Install Husky locally (outside container) as goal to prevent errored commits
```
$ sudo npm install husky
```

### Starting up

```
$ docker-compose up --build
```