# API de Equipos y Jugadores

Este proyecto es una API RESTful construida con NestJS que gestiona Equipos y Jugadores, utilizando SQLite como base de datos y Swagger para la documentación interactiva.

## Instalación

1. Clona el repositorio o navega a la carpeta del proyecto.
2. Instala las dependencias:

```bash
npm install
```

Esto instalará todos los paquetes necesarios, incluyendo `@nestjs/swagger` y `swagger-ui-express`.

## Ejecución

Para iniciar el servidor en modo desarrollo (con recarga automática):

```bash
npm run start:dev
```

El servidor se iniciará en `http://localhost:3000`.

## Documentación API

La documentación interactiva de Swagger está disponible en:

[http://localhost:3000/api](http://localhost:3000/api)

Desde allí puedes probar todos los endpoints disponibles para Equipos y Jugadores.

## Endpoints Principales

### Equipos (Teams)
- `GET /teams`: Obtener todos los equipos.
- `POST /teams`: Crear un nuevo equipo.
- `GET /teams/:id`: Obtener un equipo por ID.
- `PUT /teams/:id`: Actualizar un equipo.
- `DELETE /teams/:id`: Eliminar un equipo.
- `GET /teams/:id/players`: Obtener todos los jugadores de un equipo específico.

### Jugadores (Players)
- `GET /players`: Obtener todos los jugadores.
- `POST /players`: Crear un nuevo jugador (requiere `teamId`).
- `GET /players/:id`: Obtener un jugador por ID.
- `PUT /players/:id`: Actualizar un jugador.
- `DELETE /players/:id`: Eliminar un jugador.
