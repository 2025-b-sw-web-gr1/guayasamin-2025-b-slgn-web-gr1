# 📚 BookStream - Catálogo de Libros (Taller HBS)

Este proyecto es una aplicación web sencilla, construida con Node.js y Express, que simula una plataforma de catálogo de libros con una interfaz visual de streaming. El objetivo principal fue explorar y aplicar el motor de renderizado **Handlebars (HBS)** como alternativa a EJS.

---

## 🌟 Descripción y Objetivo del Proyecto

| Aspecto       | Detalles                                                                 |
|---------------|--------------------------------------------------------------------------|
| **Concepto**  | Plataforma de visualización de libros con diseño de tarjetas.           |
| **Objetivo**  | Implementar y demostrar el uso de Handlebars (HBS) para renderizar datos dinámicos, reforzando la separación de la lógica de la presentación. |
| **Funcionalidad** | Muestra un listado dinámico de portadas, títulos, autores y etiquetas de disponibilidad (Disponible o Próximamente). |

---

## 🛠️ Tecnologías Utilizadas

| Componente        | Tecnología              | Propósito Principal                                               |
|------------------|------------------------|------------------------------------------------------------------|
| Backend / Servidor | Node.js                | Entorno de ejecución de JavaScript.                               |
| Framework Web     | Express.js             | Configuración del servidor HTTP, manejo de rutas y middleware.    |
| Motor de Renderizado | Handlebars (HBS)     | Renderizado de plantillas del lado del servidor.                 |
| Gestión de Rutas  | path                   | Módulo nativo para construir rutas absolutas a archivos estáticos.|

---

## 💡 Análisis del Motor de Renderizado: Handlebars

Handlebars fue elegido para este taller para practicar un enfoque **"Logic-less"** (sin lógica de negocio compleja en la vista), contrastando con la flexibilidad total de EJS.

### Ventajas y Desventajas Clave

| Característica | EJS (Referencia) | Handlebars (HBS) - Elegido |
|----------------|-----------------|----------------------------|
| **Filosofía**  | Alto contenido de lógica (permite código JavaScript puro). | Bajo contenido de lógica (Logic-less). |
| **Sintaxis**   | Etiquetas tipo JavaScript (`<% ... %>`). | Sintaxis de bigotes (mustaches): `{{#each}}`, `{{#if}}`. |
| **Ventaja Principal** | Fácil de empezar, sin aprender nueva sintaxis de control. | Fuerza la separación de código; la plantilla es más limpia y legible. |
| **Desventaja Notoria** | Se presta a vistas sucias si se mezcla lógica de negocio. | Si se requiere una función compleja, se debe crear un custom helper (paso adicional). |

---

## ⚙️ Funcionamiento del Renderizado y Assets

### Renderizado Dinámico
- La aplicación pasa el array de datos de libros al motor de renderizado Handlebars en la ruta raíz (`/`).
- La plantilla `views/index.hbs` utiliza la estructura `{{#each libros}}` para iterar sobre cada libro.
- Inyecta los datos (`{{titulo}}`, `{{portada}}`) y usa condicionales (`{{#if disponible}}`) para aplicar dinámicamente las etiquetas **"Disponible"** o **"Próximamente"**.

### Gestión de Assets Estáticos

Express está configurado para servir los archivos que el navegador necesita cargar (imágenes y CSS):

| Asset        | Configuración de Express                                  | Acceso en la Plantilla              |
|-------------|-----------------------------------------------------------|------------------------------------|
| Imágenes    | `app.use('/portadas', express.static(...))`               | `<img src="/portadas/nombre.jpg">` |
| Estilos CSS | `app.use(express.static(path.join(__dirname, 'styles')))` | `<link rel="stylesheet" href="/style.css">` |

---

## ▶️ Guía de Ejecución del Proyecto

### 1. Requisitos
- Tener **Node.js** instalado.
- Tener la estructura de carpetas correcta (incluyendo `portadas/` y `styles/` al mismo nivel que `server.js`).

### 2. Instalación de Dependencias
Ejecuta este comando en la carpeta raíz del proyecto:

```bash
npm install express express-handlebars
```
```bash
node server.js
```
y abriendo la dirección
http://localhost:3000


