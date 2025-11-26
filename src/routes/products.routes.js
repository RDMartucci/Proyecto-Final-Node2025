import express from 'express';

import * as productsController from '../controllers/products.controllers.js';

const routes = express.Router();

routes.get('/products', productsController.getAllProducts);
routes.get('/products/:id', productsController.getProductById);

export default routes;
