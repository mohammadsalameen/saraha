import express from 'express'
import { connectDB } from './DB/connection.js';
const app = express();
const PORT = 5000;
connectDB();



app.listen(PORT, () => console.log(`server is running....${PORT} `));