const express = require ('express');
const conectarBD = require ('../config/db');
const cors = require ('cors');


// COnfiguracion express y puerto
const app = express();
const port = 5000;
app.use(express.json());

// rutas de los modulos
app.use('/apli/clientes', require('../routes/routescliente'));
app.use('/apli/productos', require('../routes/routesproducto'));

// Enlazamos coneccion base de datos 
conectarBD();
app.use(cors());







app.listen(port, () => console.log("El servidor se conectó", port))

app.get('/', (req, res) => {
    res.send("Bienvenido, el servidor esta configurado")
});