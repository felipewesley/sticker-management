import { Request, Response, NextFunction } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { IExampleService } from "../../common/domain/services/example/example.interface";
import { IExampleController } from "../../common/domain/controllers/example/example.interface";

/**
 * ### Example Controller
 * 
 * @implements IExampleController
 * @extends BaseController
 */
export class ExampleController extends BaseController implements IExampleController {

    /**
     * 
     * @param _service Example Service
     */
    constructor(
        private _service: IExampleService
    ) {
        super();
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get example method
    // ----------------------------------------------------------------------------------------------------

    public async getExample(req: Request, res: Response, next: NextFunction): Promise<void> {

        const content = await this._service.getExample();

        res.json(content);

        return;
    }

}
