import * as productModels from "../models/products.models.js";

export async function getAllProductsService() {
    return new Promise(async (resolve, reject) => {
        console.log("services->getAllProductsService-Promesa");
        try {
            const products = await productModels.getAllProductsModel();
            resolve(products);
        } catch (error) {
            reject(`Error in getAllProductsService: ${error.message}`);
        }
    });
}

export async function getProductByIdService(id) {
    return new Promise(async (resolve, reject) => {
        console.log("services->getProductByIdService-Promesa id:", id);
        try {
            const product = await productModels.getProductByIdModel(id);
            resolve(product);
        } catch (error) {
            reject(`Error in getProductByIdService: ${error}`);
        }
    });
}

