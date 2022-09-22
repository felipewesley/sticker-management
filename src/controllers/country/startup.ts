import { StartupType } from "../../startup/startup.type";

import { CountryControllerRoutes } from "./routes";
import { ICountryController } from "../../common/domain/controllers/country/country-controller.interface";

/**
 * ## Country Controller Startup
 * - Startup of `CountryController`
 */
export const CountryControllerStartup: StartupType<ICountryController> = {

    basePath: '/country',
    routes: CountryControllerRoutes
};
