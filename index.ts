import { AppStartup } from 'core/startup/startup';
import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

const app: Express = express();

// dotenv.config();

const port = process.env.PORT ?? 3000;

// Register routes
const startup = new AppStartup(app);
startup.registerRoutes();

app.listen(port, () => {

    console.info(`[server]: Server is running at https://localhost:${port}`);

});