import express from 'express';
import * as productsController from '../controllers/products.controllers.js';
import { authentication } from '../middlewares/authentication.js';


const routes = express.Router();

routes.get('/products', productsController.getAllProducts);
routes.get('/products/:id', productsController.getProductById);
routes.post('/products/create',authentication,productsController.addProduct);
routes.delete('/products/:id',authentication, productsController.delProduct);
routes.put("/products/:id", authentication, productsController.updateProduct);

export default routes;
