//Aqui nosotros vamos a declarar constantes, variables arreglos, vamos, todo lo que vamos a necesitar en forma global
//Existe una funcion que se llama process y en todo momento esta ejecutando en nuestro entorno, conoce el puerto por
//el cual esta escuchando en todo momento, pero puede ser que no lo encuentre en un momento dado y lo podemos
//asignar el puerto 3000

//=========
//Puerto
//=========
process.env.PORT = process.env.PORT || 3000;