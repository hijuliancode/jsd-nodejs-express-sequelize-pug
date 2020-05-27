// Importar express
const express = require('express')

// Configurar express
const app = express()
app.use('/', (req, res) => {
  res.send('Hola mundo desde Express')
})

app.listen(3000)
