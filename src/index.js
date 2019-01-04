const express = require('express'); // crear los endpoints.
const morgan = require('morgan'); //sirve para ver todas las peticiones
const path = require('path'); //unir directorios 

const { mongoose } = require('./database');

// const app = express(); SERVER.
const app = express();


// Settings configuracion nube
app.set('port', process.env.PORT || 3000);


// Middlewares (funciones que se ejecutan antes de las rutas)
app.use(morgan('dev'));
app.use(express.json()); //para poder enviar y recibir data en formato JSON;


// Routes
app.use('/Api/tasks' ,require('./routes/task.routes'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));
//console.log(); //contiene es la direccion en donde esta ese archivo js


// STARTING THE SERVER (escucha el puerto 3000 y ejecuta tal tarea.)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});