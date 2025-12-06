## 🎵 Mi Música Favorita – HTML + Tailwind + Live Server

Proyecto frontend simple que muestra una galería de mis artistas favoritos usando HTML, TailwindCSS (CDN) y diseño responsivo.
No requiere instalación de Node, frameworks ni dependencias externas: solo VSCode y la extensión Live Server (Go Live).

### 1. Cómo ejecutar el proyecto

Abre la carpeta del proyecto en Visual Studio Code.

Instala la extensión  Live Server (si aún no la tienes).

Haz clic en "Go Live" en la esquina inferior derecha de VSCode, o haz clic derecho en index.html y selecciona "Open with Live Server".

El sitio se abrirá automáticamente en tu navegador (generalmente en http://127.0.0.1:5500).

✔ No necesitas instalar nada más.

✔ No necesitas correr servidores ni usar consola.

### 2. Estructura del proyecto

/Clase-006/
└── Practica_Estandares/
    ├── index.html        <-- Contiene todo el código
    ├── README.md         <-- Documentación
    └── portadas/         <-- Carpeta con las imágenes
        ├── taylor.jpg
        ├── linkin.jpg
        ├── arctic.jpg
        └── ...


index.html: Contiene toda la estructura visual:

Header con navegación accesible

Sección principal (Hero)

Grid de artistas favoritos

Botones de géneros

Footer del sitio

portadas/: Carpeta con las imágenes usadas en las tarjetas.

### 3. Tecnologías utilizadas

HTML5 para la estructura semántica del sitio.

TailwindCSS (CDN) para estilo rápido y responsivo.

CSS Grid y Flexbox para la distribución del contenido (diseño adaptable).

Google Fonts (Inter) para la tipografía.

Live Server para una vista en tiempo real.

### 4. Qué renderiza el proyecto

El sitio muestra:

Una sección destacada con título y descripción.

Una galería dinámica de artistas favoritos.

Cada tarjeta incluye: portada, nombre, número de canciones y un botón.

Un menú con secciones: Novedades, Populares, Géneros.

Un selector de géneros musicales.

Un diseño rosado inspirado en una estética suave y moderna.

### 5. ¿Por qué está hecho con HTML + Tailwind?

Rapidez: Tailwind permite diseñar visualmente sin crear archivos CSS adicionales.

Mantenimiento sencillo: Todo se ve y se modifica directamente desde el HTML.

Diseño responsivo inmediato gracias a utilidades como Grid y Flexbox.

Ideal para proyectos visuales como galerías, catálogos y portafolios.

### 6. Características accesibles

Etiquetas semánticas: header, main, section, article, footer.

Atributos ARIA (aria-label) para navegación y botones.

Texto alternativo (alt) adecuado en todas las imágenes.

Botones y enlaces con estados hover claros.

### 7. Ideas para futuras mejoras

Agregar reproducción de audio con JavaScript.

Crear páginas adicionales para cada artista.

Filtros funcionales por género.

Modo oscuro 🌙.

Agregar animaciones o transiciones más avanzadas.

Convertir las tarjetas en componentes reutilizables (con un framework como React o Vue).

### 8. Referencia breve de las partes del proyecto

index.html: contiene toda la estructura, estilos y componentes del sitio.

portadas/: almacena las imágenes mostradas en la galería.

Tailwind (CDN): se carga directamente desde internet, sin archivos locales.
