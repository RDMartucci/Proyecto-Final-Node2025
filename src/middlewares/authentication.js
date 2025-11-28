import jwt from 'jsonwebtoken'; 
import 'dotenv/config'; 

const secret_key = process.env.JWT_SECRET_KEY ||"MySecretKey123"; 

export const authentication = (req, res, next) => { 
    const token = req.headers['authorization'].split(" ")[1]; 
    if (!token) return res.sendStatus(401); 
    jwt.verify(token, secret_key, (err) => { 
        if (err) {
            if(err.name === 'TokenExpiredError') {
                console.error("Error de autenticación -> Token vencido");
                return res.status(401).json({ error: 'Error de autenticación -> Token vencido' });
            }
            console.error("Error de autenticación -> Token inválido");
            return res.sendStatus(403)}; 
        next(); 
    }); 
}
