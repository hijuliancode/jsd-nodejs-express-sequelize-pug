// Importar express
const express = require('express')
const path = require('path')
const routes = require('./routes')

// Configurar express
const app = express()

// habilitar pug
app.set('view engine', 'pug')

// habilitar las vistas
app.set('views', path.join(__dirname, './views'))

// cargar una carpeta estatica llamada public
app.use(express.static('public'))

// Cargar las rutas
app.use('/', routes())

app.listen(3000)
