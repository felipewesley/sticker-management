import { Express } from "express";

import { ExampleControllerStartup } from "../../controllers/example/startup";

export class AppStartup {

    constructor(
        public client: Express
    ) { }

    public registerRoutes(): void {

        this.client.use(ExampleControllerStartup.basePath, ExampleControllerStartup.routes);
    }

}