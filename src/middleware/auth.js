import jwt from 'jsonwebtoken';
const auth = () =>{
    return (req, res, next) =>{
        const {token} = req.headers;
        const decoded = jwt.verify(token, 'mohammad');
        if(decoded.role != 'admin'){
            return res.status(404).json("not authorized");
        }
        next();
    }
}
export default auth;