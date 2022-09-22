import { Express } from "express";

import { CountryControllerStartup } from "../controllers/country/startup";
import { StadiumControllerStartup } from "../controllers/stadium/startup";

/**
 * # App Startup
 * Register the routes and controllers
 */
export class AppStartup {

    constructor(
        public client: Express
    ) { }

    // ----------------------------------------------------------------------------------------------------
    // @ Register routes
    // ----------------------------------------------------------------------------------------------------

    public registerRoutes(): void {

        // ----------------------------------------------------------------------------------------------------
        // @ Country controller routes
        // ----------------------------------------------------------------------------------------------------

        this.client.use(CountryControllerStartup.basePath, CountryControllerStartup.routes);

        // ----------------------------------------------------------------------------------------------------
        // @ Stadium controller routes
        // ----------------------------------------------------------------------------------------------------

        this.client.use(StadiumControllerStartup.basePath, StadiumControllerStartup.routes);
    }

}