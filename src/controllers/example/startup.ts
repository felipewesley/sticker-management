import { StartupType } from "../../core/startup/startup.type";

import { ExampleController } from "./controller";
import { ExampleControllerRoutes } from "./routes";

import { ExampleService } from "../../services/example/example";
import { IExampleController } from "../../common/domain/controllers/example.interface";

// const exampleService = null;

export const ExampleControllerStartup: StartupType<IExampleController> = {

    basePath: '/example',
    routes: ExampleControllerRoutes
};
