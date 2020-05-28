const express = require('express')
const router = express.Router()

const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimonial')

module.exports = () => {
  router.get('/', (req, res) => {
    const promises = [];
      promises.push(Viaje.findAll({
        limit: 3
      }))
      promises.push(Testimonial.findAll({
        limit: 3
      }))

      const resultado = Promise.all(promises)

      resultado.then(resultado => {
        res.render('index', {
          tituloPagina: 'Viajes',
          clase: 'home',
          viajes: resultado[0],
          testimoniales: resultado[1]
        })
      })
      .catch(error => console.error('=> Error', error))
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
    Testimonial.findAll()
      .then(testimoniales => {
        res.render('testimoniales', {
          tituloPagina: 'Testimoniales',
          testimoniales // Object Literal Enhancements = viajes: viajes
        })
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
      res.render('testimoniales', {
        errores,
        nombre,
        correo,
        mensaje
      })
    } else {
      // Almacenamos en DB
      Testimonial.create({
        nombre,
        correo,
        mensaje
      })
      .then(testimonial => res.redirect('/testimoniales'))
      .catch(error => console.error(error))
    }

  })
  return router;
}
