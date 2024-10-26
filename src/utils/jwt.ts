import jwt from 'jsonwebtoken';

const SECRET_KEY = 'lb_secret_key';

export const generateToken = (payload: any, expiresIn="3h") => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string) => {
    let result
     jwt.verify(token, SECRET_KEY,(_err:any,token:any)=>{
        result=token;
     });
     return result;
};