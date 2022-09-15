import { StartupType } from "../../core/startup/startup.type";

import { ExampleControllerRoutes } from "./routes";
import { IExampleController } from "../../common/domain/controllers/example/example.interface";

/**
 * ## Example Controller Startup
 * - Startup of `ExampleController`
 */
export const ExampleControllerStartup: StartupType<IExampleController> = {

    basePath: '/example',
    routes: ExampleControllerRoutes
};
