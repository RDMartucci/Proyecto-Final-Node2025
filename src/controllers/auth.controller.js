import { generateToken } from "../utils/tokenGen.js";

export const login = async (request, resolve) => { 
    console.log(`auth.controller->Datos recibidos->request:(metodo,url,body):${request.method} -url:${request.url} -body: ${JSON.stringify(request.body)}`); // Usar JSON.stringify para mostrar mejor el body
    
    if (!request.body || !request.body.email || !request.body.password) {
        return resolve.status(400).json({ error: "Email and password are required" });
    }
    const { email, password } = request.body;

    if (email === "test@gmail.com" && password === "123456") {
        const user = {email: email, id: "123"};
        const token = await generateToken(user);
        resolve.json({ token });
    } else {
        resolve.sendStatus(401);
    }
}