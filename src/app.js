import express from 'express';
import projetsRoutes from './Routes/Projets.routes.js';
import tasksRoutes from './Routes/Task.routes.js';

const app = express();

// Middleware
app.use(express.json());

app.use(projetsRoutes);
app.use(tasksRoutes);
export default app;