import { StartupType } from "../../startup/startup.type";

import { StadiumControllerRoutes } from "./routes";
import { IStadiumController } from "../../common/domain/controllers/stadium/stadium-controller.interface";

/**
 * ## Stadium Controller Startup
 * - Startup of `StadiumController`
 */
export const StadiumControllerStartup: StartupType<IStadiumController> = {

    basePath: '/stadium',
    routes: StadiumControllerRoutes
};
