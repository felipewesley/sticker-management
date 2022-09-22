import { NextFunction, Request, Response } from "express";

import { BaseController } from "../../common/base/controller/base-controller";
import { ICountryController } from "../../common/domain/controllers/country/country-controller.interface";
import { ICountryService } from "../../common/domain/services/country/country-service.interface";
import { CountryEnum } from "../../common/domain/enums/country/country.enum";

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
    // @ Get country by page number
    // ----------------------------------------------------------------------------------------------------

    public async getCountryByPageNumber(req: Request, res: Response, next: NextFunction): Promise<void> {

        try
        {
            const pageNumber: CountryEnum = parseInt(req.params['pageNumber']);
            
            const country = await this._service.getCountryByPageNumber(pageNumber);
    
            res.json(country);
        }
        catch(error)
        {
            next(error);
        }

        return;
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Get country by prefix
    // ----------------------------------------------------------------------------------------------------

    public async getCountryByPrefix(req: Request, res: Response, next: NextFunction): Promise<void> {

        try
        {
            const countryPrefix: string = req.params['prefix']?.toString();
    
            const country = await this._service.getCountryByPrefix(countryPrefix);
    
            res.json(country);
        }
        catch(error)
        {
            next(error);
        }

        return;
    }

}
