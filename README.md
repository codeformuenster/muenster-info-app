# muenster-info-app

## Project info

Alles über Münster im Überblick. Hervorgegangen aus dem [MÜNSTERHACK 2019](https://www.muensterhack.de) ist das Münster Info Hub *münster.jetzt,* eine Plattform, um Daten unterschiedlicher Veranstaltungsportale an einem einzigen Ort zusammenzuführen. Gedacht als Jumpstart und offen für alle Entwickler, die sich nicht selbst mit der mühseligen Anbindung von Event-Portalen beschäftigen möchten.

Als Teilprojekts ist die mobile-first Showcase-Webanwendung *app.münster.jetzt* entstanden. Hier werden alle verfügbaren News-Dienste des Münster Info Hubs in einer einfach zu navigierenden App unter [https://app.münster.jetzt](https://app.münster.jetzt) bereitgestellt. Der Source Code zur App findest du in diesem Repository.

## Start developing

Install packages
```bash
yarn install
```

start app
```bash
yarn start
```

## Or use docker

This description assumes that you are using our backend (see https://github.com/codeformuenster/muenster-info-hub), i.e. elasticsearch is running locally and `COMPOSE_PROJECT_NAME` is set to `msinfohub`.

In order to use your locally running elasticsearch you will have to adjust the address of the proxy in the file package.json:

```
"proxy": "http://msinfohub_elasticsearch_1:9200"
```

and in src/DataContext.js:66
```
"/msinfohub-events/_search?size=2000",
```

Start the container:
```bash
docker-compose up --build
```


## Used technologies

- [React - A JavaScript library for building user interfaces](https://reactjs.org/)
- [MATERIAL-UI - React components for faster and easier web development](https://material-ui.com)
