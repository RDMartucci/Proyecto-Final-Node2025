# TP-PreEntrega-TT-Node2025

Proyecto del programa **Talento Tech 2025**.  
Backend de un **E-Commerce** desarrollado en **Node.js**, utilizando la [Firestore](https://firebase.google.com/) como base de datos de prueba.

---

## 🚀 Requisitos Previos

- Node.js v18+  
- npm v9+
- cors
- express
- firebase
- jsonwebtoken
---

## ⚙️ Instalación

### Clonar el repositorio:
   ```bash
   git clone https://github.com/RDMartucci/Proyecto-Final-Node2025
```

Instalar dependencias:

    npm install


## Uso (Correr el servidor)
### Correr (ejecutar el servidor):
```
npm start
```
### Obtener todos los productos: 
Método: GET -> url:{url_servidor}/api/products 

### Obtener un solo producto por su ID:
Método: GET -> url:{url_servidor}/api/products/:id 

### Crea un producto:
(Recibe en el cuerpo (body) de la petición la información sobre el nuevo producto (en formato json) para ser guardado en el servicio de datos en la nube.)
##### Por ejemplo:
productoNuevo{
name:valor,
category:valor,
description:valor,
price:valor}

Método:POST -> url:{url_servidor}/api/products/create

### Elimina un producto:
Método:DELETE -> url:{url_servidor}/api/products/:id

### Actualiza un producto:
(Recibe en el cuerpo (body) de la petición la información sobre el nuevo producto (en formato json) para ser guardado en el servicio de datos en la nube.)
##### Por ejemplo:
productoxActualizar{
name:valor,
category:valor,
description:valor,
price:valor}

Método:PUT -> url:{url_servidor}/api/products/:id

### Logueo al servidor (autenticación)
Recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario. 
##### Por ejemplo: { email:valor, password:valor}

Método:POST -> url:{url_servidor}/auth/login

Usuario registrado para ingresar:
email:test@gmail.com
password:123456

### Link navegable (vercel): [ProyectoFinalNode2025](proyecto-final-node2025.vercel.app)
#### Ruta: (proyecto-final-node2025.vercel.app)
