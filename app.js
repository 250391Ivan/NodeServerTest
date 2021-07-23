/* 
Ejemplo  de  backend, ya  funcinal para  pruebas
AUTOR:Ivan Pillado Correa
 */   
const express = require('express')
const app = express()
require('dotenv').config();
var cors = require('cors')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'user_noticias'
});
 
connection.connect();

app.use(cors())
/* para  poder  recibir  valores del  body en las  peticiones */
app.use(express.json())
app.use(express.static('public'))
app.use('/user',require('./routes/user'))

/* Validar si el usuario Existe */
app.post('/postuser',(req,resp)=>{
    const { usuario, pass} = req.body;
    console.log('--',usuario, pass);
    console.log(`SELECT * FROM usuarios  WHERE correo = '${usuario}' `);
    connection.query(`SELECT * FROM usuarios  WHERE correo = '${usuario}' `, function (error, results, fields) {
        if (results.length > 0) {
            resp.status(200).json({
                datos:results,
                existe:true
            })  
        }else{
            resp.status(200).json({
                datos:'no hay datos',
                existe:false
            })  
        }
    })
    })
/* Registar usuarios Nuevos */
app.post('/saveUser',(req,resp)=>{
    const { correo, pass,usuario} = req.body;
    console.log('--',usuario, pass);
    connection.query(`INSERT INTO usuarios(nombre, correo, password) VALUES ('${usuario}','${correo}','${pass}')`, function (error, results, fields) {
        resp.status(200).json({
            datos:'algo',
            existe:true
        })  
    })
})

/* Obtener todos  los  usuarios */    
app.get('/getuser11',(req,resp)=>{
    connection.query('SELECT * FROM usuarios', function (error, results, fields) {
        if (results) {
            resp.status(200).json({
                datos:results
            })  
        }else{
            resp.status(400).json({
                datos:'no hay datos'
            })  
        }
    })
})

 app.listen(process.env.PORT)
console.log('--Server Arrriba',process.env.PORT);

