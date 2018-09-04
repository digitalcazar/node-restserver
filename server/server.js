//Al ser esta nuetra primera linea, va a ir al archivo de config y va a ejecutar el archivo config.js
require('./config/config');

//Primero vamos a cambiar el var por un const y agregar un ";" al final de cada linea
const express = require('express');
const app = express();
//Agregamos el body-parser
const bodyParser = require('body-parser');
//Siempre que se hace una peticion pasa por aqui y se ejecuta siempre estas lineas del body-parser a esto se le llama Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//Cambiar la palabra send por json
//Agregamos /usuario y cambiamos el texto de salida
app.get('/usuario', function(req, res) {
    res.json('get usuario');
});
//Agregamos la peticion POST, copiamos el codigo app.get y lo pegamos abajo, cambio get por el post y el mensaje de salida
app.post('/usuario', function(req, res) {
    //Con esto podemos recuperar los datos que vienen como valores en las peticiones
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else { res.json({ persona: body }); }
});
//Agregamos la peticion PUT y DELETE, de la misma fomra que el caso anterior
//Normalmente para poder modificar un registro se le debe indicar a la peticion PUT el id (parámetro) del registro de la siguiente forma
app.put('/usuario/:id', function(req, res) {
    //Para recuperar este parametro debemos hacer lo siguiente
    let id = req.params.id;
    res.json(id);
});
//En el caso del DELETE no se acostumbra a borrar registros solo se cambia un estado de algun registro
app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});

//Agregamos una funcion de flecha
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});