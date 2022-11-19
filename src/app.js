import  express from 'express';
import comprasRoutes from './routes/compra.routes.js';

const app = express();

//middlewares
app.use(express.json());


app.use('/traveler',comprasRoutes)

export default app;