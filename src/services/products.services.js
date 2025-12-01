import * as productModels from "../models/products.models.js";

export async function getAllProductsService() {
    return new Promise(async (resolve, reject) => {
        // console.log("services->getAllProductsService-Promesa");
        try {
            const products = await productModels.getAllProductsModel();
            resolve(products);
        } catch (error) {
            reject(`${error.message}`);
        }
    });
}

export async function getProductByIdService(id) {
    return new Promise(async (resolve, reject) => {
        // console.log("services->getProductByIdService-Promesa id:", id);
        try {
            const product = await productModels.getProductByIdModel(id);
            resolve(product);
        } catch (error) {
            reject(`Error in getProductByIdService: ${error}`);
        }
    });
}

export async function addProductService(product) {
    return new Promise(async (resolve, reject) => {
        // console.log("services->addProductService-Promesa product:", product);
        try {
            const newProduct = await productModels.addProductModel(product);
            resolve(newProduct);
        } catch (error) {
            reject(`Error in addProductService: ${error}`);
        }
    });
}

export async function delProductService(id) {
    return new Promise(async (resolve, reject) => {
        // console.log("services->delProductService-Promesa id:", id);
        try {
            const result = await productModels.delProductModel(id);
            resolve(result);
        } catch (error) {
            reject(`Error en delProductService: ${error}`);
        }
    });
}

export const updateProductService = async (id, updatedProductData) => {
  return new Promise(async (resolve, reject) => {
    console.log("services->updateProductService-Promise");  
    try {
      const updatedProduct = await productModels.updateProductModel(id, updatedProductData);
      resolve(updatedProduct);
    }
    catch (error) {
      reject(error);
    } 
  });
};

