const Viaje = require("../models/Viajes")
const Testimonial = require("../models/Testimonial")

exports.infoHome = (req, res) => {
  const promises = []
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
  .catch(error =>  console.error('Error =>', error))
}