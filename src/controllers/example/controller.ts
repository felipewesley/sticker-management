import { Request, Response, NextFunction } from "express";

import { BaseController } from "../../common/controller/base-controller";
import { IExampleService } from "../../common/domain/services/example.interface";
import { IExampleController } from "../../common/domain/controllers/example.interface";

export class ExampleController extends BaseController implements IExampleController {

    constructor(
        private _service: IExampleService
    ) {
        super();
    }

    public async getExample(req: Request, res: Response, next: NextFunction): Promise<void> {

        const content = await this._service.getExample();

        res.json(content);

        return;
    }

}
