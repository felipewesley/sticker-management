import { AppStartup } from './src/core/startup/startup';
import express, { Express } from 'express';
import { errorHandler } from './src/core/handlers/error.handler';
// import dotenv from 'dotenv';

const app: Express = express();

// dotenv.config();

const port = process.env.PORT ?? 3000;

// Register routes
const startup = new AppStartup(app);
startup.registerRoutes();

// Register error handler middleware
app.use(errorHandler);

app.listen(port, () => {

    console.info(`[server]: Server is running at https://localhost:${port}`);

});