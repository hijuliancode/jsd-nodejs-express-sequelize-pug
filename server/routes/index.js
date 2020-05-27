const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('Hola mundo desde Express')
  })
  router.get('/nosotros', (req, res) => {
    res.send('Hola desde Nosotros')
  })
  return router;
}
