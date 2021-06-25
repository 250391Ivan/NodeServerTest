/* 
Ejemplo  de  backend, ya  funcinal para  pruebas
AUTOR:Ivan Pillado Correa
 */   
const express = require('express')
const app = express()
require('dotenv').config();
var cors = require('cors')

app.use(cors())
/* para  poder  recibir  valores del  body en las  peticiones */
app.use(express.json())
app.use(express.static('public'))
app.use('/user',require('./routes/user'))

app.listen(process.env.PORT)
console.log('--Server Arrriba',process.env.PORT);

