import { CountryEnum } from "../../common/domain/enums/country/country.enum";
import { CountryModel, ICountryModel } from "../../common/domain/models/country/country.model";
import { ICountryRepository } from "../../common/domain/repositories/country/country.interface";
import { ICountryService } from "../../common/domain/services/country/country.interface";

/**
 * ### Country Service
 * 
 * @implements ICountryService
 */
export class CountryService implements ICountryService {

    /**
     * Country Service constructor
     */
    constructor(
        private _countryRepository: ICountryRepository
    ) { }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getCountryById(countryId: CountryEnum): Promise<ICountryModel> {

        const country = await this._countryRepository.getCountryById(countryId);

        if (!country)
        {
            // throw new Error(`The requested country was not found`);
            return null;
        }

        const model = new CountryModel();

        model.id = country.id;
        model.name = country.name;
        model.group = country.group;
        model.prefix = country.prefix;
        model.teamName = country.teamName;

        return model;
    }

    public async getCountryByPrefix(prefix: string): Promise<ICountryModel> {

        const country = await this._countryRepository.getCountryByPrefix(prefix);

        if (!country)
        {
            // throw new Error(`The requested country was not found`);
            return null;
        }

        const model = new CountryModel();

        model.id = country.id;
        model.name = country.name;
        model.group = country.group;
        model.prefix = country.prefix;
        model.teamName = country.teamName;

        return model;
    }
    
}