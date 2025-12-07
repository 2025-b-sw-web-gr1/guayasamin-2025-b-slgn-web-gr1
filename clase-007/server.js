const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Servir imágenes de portadas desde /portadas
app.use('/portadas', express.static(path.join(__dirname, 'portadas')));

// (opcional) servir otros assets estáticos
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Configurar Handlebars (.hbs) como motor de vistas
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Datos de muestra (cada libro usa una imagen local en /portadas)
const libros = [
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio_publicacion: 1967, disponible: true, portada: '/portadas/cien_anos.jpg' },
  { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', anio_publicacion: 1605, disponible: false, portada: '/portadas/don_quijote.jpg' },
  { titulo: 'Un mundo Feliz', autor: 'Aldous Huxley', anio_publicacion: 1932, disponible: true, portada: '/portadas/mundo_feliz.jpg' },
  { titulo: '1984', autor: 'George Orwell', anio_publicacion: 1949, disponible: true, portada: '/portadas/1984.jpg' },
  { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', anio_publicacion: 1813, disponible: false, portada: '/portadas/orgullo_prejuicio.jpg' },
  { titulo: 'Cadáver exquisito', autor: 'Agustina Bazterrica', anio_publicacion: 2017, disponible: true, portada: '/portadas/cadaver.jpg' },
  { titulo: 'Mujercitas', autor: 'Louisa May Alcott', anio_publicacion: 1868, disponible: true, portada: '/portadas/mujercitas.jpg' },
  { titulo: 'La rebelión en la granja', autor: 'George Orwell', anio_publicacion: 1945, disponible: false, portada: '/portadas/rebelion.jpg' }
];

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { libros });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Estilos CSS
app.use(express.static(path.join(__dirname, 'styles')));


