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
  router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
      tituloPagina: 'Testimoniales'
    })
  })
  return router;
}
