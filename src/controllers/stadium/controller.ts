import { Request, Response } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { IStadiumController } from "../../common/domain/controllers/stadium/stadium-controller.interface";
import { IStadiumService } from "../../common/domain/services/stadium/stadium-service.interface";

/**
 * ### Stadium Controller
 * 
 * @implements IStadiumController
 * @extends BaseController
 */
export class StadiumController extends BaseController implements IStadiumController {

    /**
     * 
     * @param _service Stadium Service
     */
    constructor(
        private _service: IStadiumService
    ) {
        super();
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get stadium by Id
    // ----------------------------------------------------------------------------------------------------

    public async getStadiumById(req: Request, res: Response): Promise<void> {

        try
        {
            
        }
        catch(error)
        {
            
        }

        return;
    }

}
