import { StartupType } from "../../startup/startup.type";

import { PlayerControllerRoutes } from "./routes";
import { IPlayerController } from "../../common/domain/controllers/player/player-controller.interface";

/**
 * ## Player Controller Startup
 * - Startup of `PlayerController`
 */
export const PlayerControllerStartup: StartupType<IPlayerController> = {

    basePath: '/player',
    routes: PlayerControllerRoutes
};
