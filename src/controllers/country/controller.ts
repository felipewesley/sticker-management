import { Request, Response } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { ICountryController } from "../../common/domain/controllers/country/country-controller.interface";
import { ICountryService } from "../../common/domain/services/country/country-service.interface";
import { CountryEnum } from "../../common/domain/enums/country/country.enum";
import { HttpStatusCode } from "../../common/types/enums/http-status-code.enum";

/**
 * ### Country Controller
 * 
 * @implements ICountryController
 * @extends BaseController
 */
export class CountryController extends BaseController implements ICountryController {

    /**
     * 
     * @param _service Country Service
     */
    constructor(
        private _service: ICountryService
    ) {
        super();
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get country by Id
    // ----------------------------------------------------------------------------------------------------

    public async getCountryById(req: Request, res: Response): Promise<void> {

        const countryId: CountryEnum = parseInt(req.params['countryId']);

        try
        {
            const country = await this._service.getCountryById(countryId);
    
            res.json(country);
        }
        catch(error)
        {
            res.status(HttpStatusCode.NotFound).json(`Requested country was not found`);
        }

        return;
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get country by prefix
    // ----------------------------------------------------------------------------------------------------

    public async getCountryByPrefix(req: Request, res: Response): Promise<void> {

        const countryPrefix: string = req.params['prefix']?.toString();

        const country = await this._service.getCountryByPrefix(countryPrefix);

        res.json(country);

        return;
    }

}
