import { NextFunction, Request, Response } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { IPlayerController } from "../../common/domain/controllers/player/player-controller.interface";
import { IPlayerService } from "../../common/domain/services/player/player-service.interface";

/**
 * ### Player Controller
 * 
 * @implements IPlayerController
 * @extends BaseController
 */
export class PlayerController extends BaseController implements IPlayerController {

    /**
     * 
     * @param _service Player Service
     */
    constructor(
        private _service: IPlayerService
    ) {
        super();
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get stadium by Id
    // ----------------------------------------------------------------------------------------------------

    public async getPlayerById(req: Request, res: Response, next?: NextFunction): Promise<void> {

        try
        {
            const playerId: string = req.params['playerId']?.toString();

            const player = await this._service.getPlayerById(playerId);

            res.json(player);
        }
        catch(error)
        {
            next(error);
        }

        return;
    }

}
