import { StartupType } from "core/startup/startup.type";

import { ExampleController } from "./controller";
import { ExampleControllerRoutes } from "./routes";

import { ExampleService } from "services/example/example";
import { IExampleController } from "common/domain/controllers/example.interface";

const exampleService = new ExampleService();

export const ExampleControllerStartup: StartupType<IExampleController> = {

    basePath: '/example',
    controller: new ExampleController(exampleService),
    routes: ExampleControllerRoutes
};