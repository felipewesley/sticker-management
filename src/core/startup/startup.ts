import { Express } from "express";

import { ExampleControllerStartup } from "../../controllers/example/startup";
import { CountryControllerStartup } from "../../controllers/country/startup";

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
        // @ Example controller routes
        // ----------------------------------------------------------------------------------------------------

        this.client.use(ExampleControllerStartup.basePath, ExampleControllerStartup.routes);

        // ----------------------------------------------------------------------------------------------------
        // @ Country controller routes
        // ----------------------------------------------------------------------------------------------------

        this.client.use(CountryControllerStartup.basePath, CountryControllerStartup.routes);
    }

}