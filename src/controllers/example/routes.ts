import express from "express";

import { ExampleController } from "./controller";
import { IExampleController } from "../../common/domain/controllers/example/example.interface";

import { ExampleService } from "../../services/example/example";

// ----------------------------------------------------------------------------------------------------
// @ Dependencies
// ----------------------------------------------------------------------------------------------------

const exampleService = new ExampleService();

// ----------------------------------------------------------------------------------------------------
// @ Controller and router instance
// ----------------------------------------------------------------------------------------------------

const Controller: IExampleController = new ExampleController(exampleService);
export const ExampleControllerRoutes = express.Router();

// ----------------------------------------------------------------------------------------------------
// @ Routes
// ----------------------------------------------------------------------------------------------------

/**
 * GET
 * Example method
 */
ExampleControllerRoutes.get('/', Controller.getExample.bind(Controller));