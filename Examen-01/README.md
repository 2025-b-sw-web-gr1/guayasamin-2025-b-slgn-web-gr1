# 📘 Examen 001: Documentación de API con Swagger

Este repositorio contiene la documentación técnica completa de la API **JSONPlaceholder**, realizada bajo la especificación **OpenAPI 3.0** (Swagger).

Este proyecto forma parte del **Examen 001** y cubre la definición de endpoints, esquemas de datos y respuestas HTTP para una API REST simulada.

## 👩‍💻 Autora
**Sara Guayasamin**
*Ingeniería de Sistemas / Desarrollo de Software*

---

## 🚀 Descripción del Proyecto

El objetivo de este proyecto es documentar los servicios de **JSONPlaceholder** para facilitar su consumo por parte de desarrolladores Frontend y Backend. La documentación incluye:

* ✅ **Verbos HTTP:** GET, POST, PUT, PATCH, DELETE.
* ✅ **Módulos documentados:**
    * Posts (Publicaciones)
    * Comments (Comentarios)
    * Albums (Álbumes)
    * Photos (Fotos)
    * Todos (Tareas)
    * Users (Usuarios)
* ✅ **Schemas:** Definición de modelos de datos reutilizables.
* ✅ **Códigos de Estado:** 200, 201, 404, etc.

## 🛠️ Tecnologías y Herramientas

* **OpenAPI 3.0 (OAS):** Estándar de especificación.
* **Swagger Editor:** Para la redacción y validación del código YAML.
* **JSONPlaceholder:** API base utilizada para la documentación.
* **Git & GitHub:** Control de versiones.

## 📖 ¿Cómo visualizar la documentación?

Dado que el archivo principal está en formato YAML, se recomienda utilizar un visor compatible con Swagger.

### Opción 1: Swagger Editor (Online)
1. Descarga o copia el contenido del archivo `examen-01.yaml` de este repositorio.
2. Ingresa a [Swagger Editor](https://editor.swagger.io/).
3. Borra el contenido actual y pega el código de este proyecto.
4. La documentación interactiva aparecerá automáticamente en el panel derecho.

### Opción 2: Visual Studio Code
1. Clona este repositorio.
2. Abre el archivo `examen-01.yaml` en VS Code.
3. Instala la extensión **"OpenAPI (Swagger) Editor"**.
4. Usa la vista previa para navegar por la documentación.

## 📂 Estructura del Proyecto

```text
Examen-01/
├── examen-01.yaml   # Archivo fuente con la especificación OpenAPI
└── README.md        # Información general del proyecto