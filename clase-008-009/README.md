# Taller: Parámetros y Métodos HTTP con Bruno 🐶

Este proyecto contiene una colección de pruebas de API realizada con **Bruno**, diseñada para interactuar con la API falsa de [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## 🎯 Objetivo
El propósito de este taller (Clase 008 - 009) es comprender de manera práctica el ciclo de petición-respuesta HTTP, manipulando:
* **Verbos HTTP:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
* **Parámetros:** Query Params (ej. `?postId=1`) y Path Variables (ej. `/posts/1`).
* **Cuerpos de petición (Body):** Envío de datos en formato JSON.

## 🛠️ Herramientas
* [Bruno](https://www.usebruno.com/): Cliente de API Open Source, Offline-first y Git-friendly.
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/): API REST falsa para pruebas y prototipado.

## 📂 Estructura de la Colección
La colección incluye peticiones `.bru` organizadas por recurso:

### 📝 Posts (Artículos)
* `get-all-posts.bru`: Obtener todos los posts.
* `get-post-by-id.bru`: Obtener un post específico.
* `create-post.bru`: Crear un post (POST con Body JSON).
* `update-post-put.bru`: Reemplazo completo de un post (PUT).
* `update-post-title.bru`: Actualización parcial (solo título) (PATCH).
* `delete-post.bru`: Eliminar un post.

### 💬 Comments (Comentarios)
* `get-all-comments.bru`: Listar comentarios.
* `get-comments-by-post.bru`: Filtrar comentarios usando Query Params (`?postId=1`).
* `create-comment.bru`: Crear nuevo comentario.

### 💿 Albums & 📷 Photos
* `get-all-albums.bru` / `get-album-by-id.bru`
* `create-album.bru`: Crear álbum (Ejemplo de POST).
* `get-all-photos.bru`
* `get-photos-by-album.bru`: Filtrar fotos por álbum.

### ✅ Todos (Tareas) & 👤 Users
* Operaciones CRUD para la gestión de tareas y usuarios.

## 🚀 Guía de Uso

1.  **Clonar/Descargar:** Asegúrate de tener esta carpeta en tu equipo.
2.  **Abrir en Bruno:**
    * Abre la aplicación **Bruno**.
    * Selecciona **"Open Collection"**.
    * Navega hasta la carpeta `clase-008-009` y ábrela.
3.  **Ejecutar Peticiones:**
    * Selecciona cualquier archivo `.bru` de la barra lateral.
    * Presiona el botón **Run (➡️)** arriba a la derecha.
    * Observa el panel **Response** para ver los datos y el código de estado (ej: `200 OK`, `201 Created`).

## ⚠️ Notas Importantes
* **Safe Mode:** Al abrir la colección, selecciona "Safe Mode" si Bruno te lo pregunta. No se requieren scripts automatizados complejos.
* **Persistencia de Datos:** Como JSONPlaceholder es una API de prueba, los recursos creados o modificados **no se guardan realmente en el servidor**. La API simula la respuesta correcta, pero si vuelves a buscar el recurso creado, no existirá.

---
**Curso:** Software Web - GR1 (2025-B)