import { connectDB } from "./DB/connection.js"
import userRouter from './src/modules/user/user.router.js'
import authRouter from './src/modules/authentication/auth.router.js'
import messageRouter from './src/modules/message/message.router.js'
import { AppError } from "./src/utils/AppError.js"
export const initApp = (app, express) =>{
    connectDB();
    app.use(express.json());
    app.use('/users',userRouter);
    app.use('/auth',authRouter);
    app.use('/message', messageRouter);
    app.use('/', (req, res) => res.status(200).json("Welcome"));
    app.use('*', (req, res, next) => {
        return next(new AppError("Page not found", 404))
    });
}