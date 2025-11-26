import { db } from "../data/dataFirebase.js";
import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const collectionRef = "products";

export async function  getAllProductsModel() {
    return new Promise(async (resolve, reject) => {
        try {
            const products = [];
            const querySnapshot = await getDocs(collection(db, collectionRef));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                products.push({ id: doc.id, ...doc.data() });
            });
            console.log("Productos obtenidos: ", products);
            resolve(products);
        }catch (error) {
            console.error("Error al obtener los documentos: ", error);
            reject(error);
        }    
    });
}

export async function getProductByIdModel(id) {
    return new Promise(async (resolve, reject) => {
        console.log("models->getProductById-Promesa id:", id);
        try {
            const docRef = doc(db, collectionRef, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            resolve(docSnap.data());
            } else {
            console.log("¡No existe el documento!");
            reject("¡No existe el documento!");
            }
        } catch (error) {
            console.error("Error al obtener el documento: ", error);
            reject(`Error in getProductByIdModel: ${error}`);
        }
    });
}
