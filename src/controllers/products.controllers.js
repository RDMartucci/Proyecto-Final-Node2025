import * as productsService from '../services/products.services.js';

export async function getAllProducts(req, res) {
    console.log("controllers->getAllProductsController");
    try {
        const products = await productsService.getAllProductsService();
        console.log("controllers-obtenerProductos:", products);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error en getAllProductsController: ", error);
        res.status(500).json({ error: 'Error al obtener los productos' });
        // resolve.status(500).send()
    }
}
// export async function getProductById(req, res) {
//     const { id } = req.params;
//     console.log("controllers->getProductByIdController id:", id);
//     try {
//         if (!id) res.status(400).json({ error: 'ID de producto no proporcionado' });
//         const product = await productsService.getProductByIdService(id);
//         if (!product) res.status(404).json({ error: 'Producto no encontrado' });
//         console.log("controllers-obtenerProductoPorId:", product);
//         res.status(200).json(product);
//     } catch (error) {
//         console.error("Error en getProductByIdController: ", error);
//         res.status(500).json({ error: 'Error al obtener el producto por ID' });
//     }
// }

export async function getProductById(req, res) {
    
    try {
        const { id } = req.params;
    console.log("controllers->getProductByIdController id:", id);
    if (!id) {
        return res.status(400).json({ error: 'ID de producto no proporcionado' });
    }
        const product = await productsService.getProductByIdService(id);
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
        console.log("controllers-obtenerProductoPorId:", product);
        res.status(200).json(product);    
    } catch (error) {
        console.error("Error en getProductByIdController: ", error);
        res.status(500).json({ error: 'Error interno del servidor al obtener el producto' });
    }
}

