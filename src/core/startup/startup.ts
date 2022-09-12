import { Express } from "express";

import { ExampleControllerStartup } from "controllers/example";

export class AppStartup {

    constructor(
        public client: Express
    ) { }

    public registerRoutes(): void {

        this.client.use(ExampleControllerStartup.basePath, ExampleControllerStartup.routes);
    }

}