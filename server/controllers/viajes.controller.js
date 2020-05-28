const Viaje = require("../models/Viajes")

exports.infoViajes = (req, res) => {
  Viaje.findAll()
    .then(viajes => {
      res.render('viajes', {
        tituloPagina: 'Viajes',
        viajes // Object Literal Enhancements = viajes: viajes
      })
    })
    .catch(error => console.error('=> Error', error))
}
exports.infoViaje = (req, res) => {
  Viaje.findByPk(req.params.id)
    .then(viaje => res.render('viaje', {
      viaje // Object Literal Enhancements = viaje: viaje
    }))
    .catch(error => console.error('=> Error', error))
}
