import { AppStartup } from './src/startup';
import express, { Express } from 'express';
import { errorHandler } from './src/core/handlers/error.handler';
// import dotenv from 'dotenv';
const cors = require('cors');

const app: Express = express();

// dotenv.config();

// Register cors handler
app.use(cors());

const port = process.env.PORT ?? 3000;

// Register routes
const startup = new AppStartup(app);
startup.registerRoutes();

// Register error handler middleware
app.use(errorHandler);

app.listen(port, () => {

    console.info(`[server]: Server is running at https://localhost:${port}`);

});