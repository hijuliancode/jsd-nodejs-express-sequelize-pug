const express = require('express')
const router = express.Router()

const Viaje = require('../models/Viajes')

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('index', {
      tituloPagina: 'Inicio'
    })
  })
  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      tituloPagina: 'Sobre Nosotros'
    })
  })
  router.get('/viajes', (req, res) => {
    Viaje.findAll()
      .then(viajes => {
        res.render('viajes', {
          tituloPagina: 'Viajes',
          viajes // Object Literal Enhancements = viajes: viajes
        })
      })
      .catch(error => console.error('=> Error', error))
  })
  router.get('/viajes/:id', (req, res) => {
    Viaje.findByPk(req.params.id)
      .then(viaje => res.render('viaje', {
        viaje // Object Literal Enhancements = viajes: viajes
      }))
      .catch(error => console.error('=> Error', error))
  })
  router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
      tituloPagina: 'Testimoniales'
    })
  })
  // Cuando se llena el formulario de testimoniales
  router.post('/testimoniales', (req, res) => {
    console.log(req.body);
    // Validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body

    let errores = []
    if(!nombre) {
      errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo) {
      errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje) {
      errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    // Revisar en caso de que haya o no errores

    if(errores.length) {
      // Muestra la vista con errores
    } else {
      // Almacenamos en DB
    }

  })
  return router;
}
