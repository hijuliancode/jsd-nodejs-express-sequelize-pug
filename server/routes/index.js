const express = require('express')
const router = express.Router()

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
  return router;
}
