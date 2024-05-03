const express = require ('express');
const router = express.Router();
const ProductosController = require ('../controllers/ProductosController');

router.post('/', ProductosController.agregarProducto);
router.get('/', ProductosController.mostrarProductos);
router.get('/:id', ProductosController.mostrarunProducto);
router.delete('/:id', ProductosController.eliminarProductos);
router.patch('/:id', ProductosController.modificarProducto);


module.exports = router;

