import { Request, Response } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { IStadiumController } from "../../common/domain/controllers/stadium/stadium-controller.interface";
import { IStadiumService } from "../../common/domain/services/stadium/stadium-service.interface";
import { HttpStatusCode } from "../../common/types/enums/http-status-code.enum";

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
            const stadiumId: string = req.params['countryId']?.toString();

            const stadium = this._service.getStadiumById(stadiumId);

            res.json(stadium);
        }
        catch(error)
        {
            res.status(HttpStatusCode.NotFound).json(`Requested stadium was not found`);
        }

        return;
    }

}
