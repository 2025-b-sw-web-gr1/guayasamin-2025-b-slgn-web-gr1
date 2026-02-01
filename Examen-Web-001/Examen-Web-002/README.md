# Examen Web Estudiante - NestJS Teams & Players API

## Descripción
API RESTful desarrollada con NestJS, SQLite y TypeORM para gestionar Equipos y Jugadores con relación One-to-Many.

## Requisitos Previos
- Node.js (v14 o superior)
- npm

## Instalación

1. Clonar el repositorio o navegar a la carpeta raíz del proyecto.
2. Instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Endpoints y Ejemplos de Uso (CURL)

### Teams (Equipos)

#### 1. Crear un Equipo (POST)
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid", "country": "Spain"}'
```

#### 2. Obtener todos los Equipos (GET)
```bash
curl http://localhost:3000/teams
```

#### 3. Obtener un Equipo por ID (GET)
```bash
curl http://localhost:3000/teams/1
```

#### 4. Actualizar un Equipo (PUT)
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid FC"}'
```

#### 5. Eliminar un Equipo (DELETE)
```bash
curl -X DELETE http://localhost:3000/teams/1
```

### Players (Jugadores)

#### 1. Crear un Jugador (POST)
_Nota: Asegúrate de que exista el equipo con el ID especificado (ej: teamId: 1)_
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Vinicius Jr", "position": "Forward", "teamId": 1}'
```

#### 2. Obtener todos los Jugadores (GET)
```bash
curl http://localhost:3000/players
```

#### 3. Obtener un Jugador por ID (GET)
```bash
curl http://localhost:3000/players/1
```

#### 4. Obtener Jugadores de un Equipo específico (GET - Endpoint Especial)
```bash
curl http://localhost:3000/teams/1/players
```

## Estructura del Proyecto

- `src/teams`: Módulo de Equipos.
- `src/players`: Módulo de Jugadores.
- `db.sqlite`: Base de datos SQLite (se genera automáticamente al ejecutar).

