import express from "express";

import { IExampleController } from "../../common/domain/controllers/example.interface";
import { ExampleService } from "../../services/example/example";
import { ExampleController } from "./controller";

const exampleService = new ExampleService();

const Controller: IExampleController = new ExampleController(exampleService);

export const ExampleControllerRoutes = express.Router();

/**
 * Example method
 * - GET
 */
ExampleControllerRoutes.get('/', Controller.getExample.bind(Controller));