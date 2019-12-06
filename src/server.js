import express , {json} from 'express'; 

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(json());

//Routes to import
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/tasks.routes';
// Routes to use
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;