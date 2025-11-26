import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import productsRoutes from './src/routes/products.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsConfig));


app.use((req, res, next) => {
    console.log(`Index->Datos recibidos->metodo:${req.method} url:${req.url}`);
    console.log('Index->Body después de bodyParser.json:', req.body);
    next();
});

//Rutas.
app.use('/api', productsRoutes);

//Manejo de rutas no definidas.
app.use((req, res, next) => {
    res.status(404).send('<h2>Recurso no encontrado o ruta inválida</h2>');
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${ PORT }`);
});



