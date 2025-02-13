import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';
const auth = () =>{
    return (req, res, next) =>{
        const {token} = req.headers;
        const decoded = jwt.verify(token, 'mohammad');
        if(decoded.role != 'admin'){
            return next(new AppError("not authorized", 404));
        }
        req.id = decoded.id;
        next();
    }
}
export default auth;