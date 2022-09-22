import { CountryEnum } from "../../domain/enums/country/country.enum";
import { CountryModel, ICountryModel } from "../../domain/models/country/country.model";
import { ICountryRepository } from "../../common/domain/repositories/country/country-repository.interface";
import { ICountryService } from "../../common/domain/services/country/country-service.interface";
import { NotFoundError } from "../../core/errors/not-found.error";

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

    public async getCountryByPageNumber(pageNumber: CountryEnum): Promise<ICountryModel> {

        const country = await this._countryRepository.getCountryByPageNumber(pageNumber);

        if (!country)
            throw new NotFoundError(`The requested country was not found`);

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
            throw new NotFoundError(`The requested country was not found`);

        const model = new CountryModel();

        model.id = country.id;
        model.name = country.name;
        model.group = country.group;
        model.prefix = country.prefix;
        model.teamName = country.teamName;

        return model;
    }
    
}