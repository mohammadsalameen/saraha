import express from 'express'
import { initApp } from './index.router.js';
const app = express();
const PORT = 5000;
initApp(app, express);



app.listen(PORT, () => console.log(`server is running....${PORT} `));