import * as productsService from '../services/products.services.js';

export async function getAllProducts(req, res) {
    // console.log("controllers->getAllProductsController");
    try {
        const products = await productsService.getAllProductsService();
        console.log("controllers-obtenerProductos:", products);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error en getAllProductsController: ", error);
        res.status(500).json({ error: 'Error al obtener los productos', message:error });
        // resolve.status(500).send()
    }
}

export async function getProductById(req, res) {
    
    try {
        const { id } = req.params;
    console.log("controllers->getProductByIdController id:", id);
    if (!id) {
        console.error("No se proporcionó ID de producto en los parámetros de la solicitud");
        return res.status(400).json({ error: 'ID de producto no proporcionado' });
    }
        const product = await productsService.getProductByIdService(id);
    if (!product) {
        console.error("Producto no encontrado con ID:", id);
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
        console.log("controllers-obtenerProductoPorId:", product);
        res.status(200).json(product);    
    } catch (error) {
        console.error("Error en getProductByIdController: ", error);
        // res.status(500).json({ error: 'Error interno del servidor al obtener el producto' });
        res.status(500).json({ error: error});
    }
}

export async function addProduct(req, res) {
    try {
        const product = req.body;
        // console.log("controllers->addProductController product:", product);
        if (!product || Object.keys(product).length === 0) {
            console.error("No se proporcionaron datos de producto en el cuerpo de la solicitud");
            return res.status(400).json({ error: 'Datos de producto no proporcionados' });
        }   
        const newProduct = await productsService.addProductService(product);
        console.log("controllers-producto agregado:", newProduct);
        res.status(201).json(newProduct);
    } catch (error) {   
        console.error("Error en addProductController: ", error);
        res.status(500).json({ error: 'Error interno del servidor al agregar el producto' });
    }   
}

export async function delProduct(req, res) {
    try {
        const { id } = req.params;
        // console.log("controllers->delProductController id:", id);
        if (!id) {
            return res.status(400).json({ error: 'ID de producto no proporcionado' });
        }
        await productsService.delProductService(id);
        console.log("controllers-producto eliminado id:", id);
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error("Error en delProductController: ", error);
        res.status(500).json({ error: 'Error interno del servidor al eliminar el producto' });
    }   
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) res.status(400).json({ message: 'ID de producto no proporcionado' });
        const updateData = req.body;
        const updatedProduct = await productsService.updateProductService(id, updateData);
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
};