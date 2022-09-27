// la importacion o exportacion la haremos con= requiere 
const express = require('express')
// llama la funcion express el cual tendra metodos
const app  = express()  

// metodo get, el cual dice, a la ruta
app.get('/ruta', () => {
    console.log('hola mundo')
})

app.listen(3000, (error)=> {
    error ? console.log(error) : console.log('server running')
})