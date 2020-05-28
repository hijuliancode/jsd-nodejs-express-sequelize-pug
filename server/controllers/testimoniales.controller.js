const Testimonial = require("../models/Testimonial")

exports.infoTestimoniales = (req, res) => {
  Testimonial.findAll()
    .then(testimoniales => {
      res.render('testimoniales', {
        tituloPagina: 'Testimoniales',
        testimoniales // Object Literal Enhancements = viajes: viajes
      } )
    })
}
exports.guardarTestimonial = (req, res) => {
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
}
