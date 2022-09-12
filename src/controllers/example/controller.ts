import { Request, Response, NextFunction } from "express";

import { Controller } from "core/decorators/controller";

import { ExampleControllerStartup } from ".";

import { BaseController } from "common/controller/base-controller";
import { IExampleService } from "common/domain/services/example.interface";
import { IExampleController } from "common/domain/controllers/example.interface";

@Controller({
    route: ExampleControllerStartup.basePath
})
export class ExampleController extends BaseController implements IExampleController {

    constructor(
        private _service: IExampleService
    ) {
        super();
    }

    public async getExample(req: Request, res: Response, next: NextFunction): Promise<void> {

        const content = this._service.getExample();

        res.json(content);

        return;
    }

}
