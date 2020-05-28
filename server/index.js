// Importar express
const express = require('express')
const path = require('path')
const routes = require('./routes')
const configs = require('./config')

// db.authenticate()
//   .then(() => console.log('DB Conectada') )
//   .catch(error => console.error('error al conectar => ', error))

// Configurar express
const app = express()

// habilitar pug
app.set('view engine', 'pug')

// habilitar las vistas
app.set('views', path.join(__dirname, './views'))

// cargar una carpeta estatica llamada public
app.use(express.static('public'))

// Validar si estamos en desarrollo o producción
const config = configs[app.get('env')]

// Creamos la variable para el sitio web
app.locals.titulo = config.nombredelsitio;

// Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear() // Locals son variables de NodeJS que Node/express va a reconocer y pasar entre los distintos archivos
  return next()
})

// Cargar las rutas
app.use('/', routes())

app.listen(3000)
