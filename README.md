# Quake3 log parser

## Getting started

This app parses a Quake3 game log about every match retrieving information about players like kills, deaths and so on.

## Prerequisites

- ##### Docker and docker-compose
    - https://docs.docker.com/compose/install/

- ##### Husky
    - Install Husky locally (outside container) as goal to prevent errored commits
    
    <br>
     
    ```
    $ sudo npm install husky
    ```

## Starting up

```
$ docker-compose up --build
```

## Endpoints

Routes config can be found in: Main/Framework/Routes.ts
<br>
Port in dev environment is 30001 (see docker-compose.yaml)

| METHOD | URI | |
| -------------:|:-----------------------------------:|:-----------------------------------:
| `GET` | /api/v1/games | Return all `gameCodes` available to search |
| `GET` | /api/v1/game-kills | Return all info about all games |
| `GET` | /api/v1/game-kills/:gameCode | Return game info filtering specific game (`:gameCode`) |

## Testing

#### Development environment
- In development mode is required to access container and run watch script, you can run two kinds of
scripts, verbose or silent.

```
$ docker exec -it lab-log-parser bash

# verbose
$ npm run test:watch

# or silent
$ npm run test:watch-silent
```
#### Coverage

- Just running <strong>npm run test</strong> will run all tests and make a coverage files in root folder