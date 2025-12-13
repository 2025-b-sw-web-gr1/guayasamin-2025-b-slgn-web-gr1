# Proyecto 001 - API Recetas y Ingredientes

## Descripción
API RESTful que modela una relación **1-a-muchos** entre **Recetas** y **Ingredientes**. Una receta puede incluir muchos ingredientes, pero cada ingrediente pertenece a una sola receta.

## Objetivo
- Diseñar endpoints RESTful y documentarlos con Swagger/OpenAPI.
- Proporcionar una colección de peticiones Bruno (.bru) para pruebas y demostraciones.
- Este proyecto sirve como ejemplo para prácticas de diseño y documentación de APIs.

## Modelo de Datos

### Receta (Receta)
- `id`: ID único de la receta
- `title`: Nombre de la receta
- `description`: Descripción breve
- `servings`: Porciones
- `timeMinutes`: Tiempo de preparación (minutos)
- `difficulty`: Dificultad (Fácil/Medio/Difícil)

### Ingrediente (Ingrediente)
- `id`: ID del ingrediente
- `name`: Nombre del ingrediente
- `amount`: Cantidad (ej. 2)
- `unit`: Unidad (ej. tazas, gramos)
- `recetaId`: ID de la receta a la que pertenece (FK)

## Endpoints

### Recetas
- `GET /recetas` - Obtener todas las recetas
- `GET /recetas/{id}` - Obtener receta por ID
- `POST /recetas` - Crear nueva receta
- `PUT /recetas/{id}` - Actualizar receta completa
- `DELETE /recetas/{id}` - Eliminar receta por ID

### Ingredientes
- `GET /ingredientes` - Obtener todos los ingredientes
- `GET /ingredientes/{id}` - Obtener ingrediente por ID
- `GET /recetas/{id}/ingredientes` - Obtener ingredientes de una receta
- `POST /ingredientes` - Crear nuevo ingrediente
- `PUT /ingredientes/{id}` - Actualizar ingrediente
- `DELETE /ingredientes/{id}` - Eliminar ingrediente

## Estructura del proyecto

```
Proyecto-001-Recetas/
├── bruno.json
├── swagger.yaml
├── DOCUMENTACION.txt
├── README.md
│
├── Endpoints Recetas:
│   ├── get-all-recetas.bru
│   ├── get-receta-by-id.bru
│   ├── create-receta.bru
│   ├── update-receta.bru
│   └── delete-receta.bru
│
└── Endpoints Ingredientes:
    ├── get-all-ingredientes.bru
    ├── get-ingrediente-by-id.bru
    ├── get-ingredientes-by-receta.bru
    ├── create-ingrediente.bru
    ├── update-ingrediente.bru
    └── delete-ingrediente.bru
```

## Uso con Bruno
1. Abrir Bruno y cargar la colección desde `Proyecto-001-Recetas/`.
2. Ejecutar peticiones en este orden recomendado:
   - Crear recetas primero
   - Crear ingredientes ligados a receta por `recetaId`
   - Consultar ingredientes de la receta con `/recetas/{id}/ingredientes`

## Autores

- Autora: Sara Guayasamín

---

¡Listo! Puedes usar `swagger.yaml` y los archivos `.bru` para hacer una demostración.
