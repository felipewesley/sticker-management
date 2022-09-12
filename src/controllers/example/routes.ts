import express from "express";

import { ExampleControllerStartup } from "controllers/example";
import { IExampleController } from "common/domain/controllers/example.interface";

export const ExampleControllerRoutes = express.Router();

const Controller: IExampleController = ExampleControllerStartup.controller;

/**
 * Example method
 * - GET
 */
ExampleControllerRoutes.get('/', Controller.getExample);