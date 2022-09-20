import { CountryEnum } from "../../common/domain/enums/country/country.enum";
import { ICountryModel } from "../../common/domain/models/country/country.model";
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

        console.log('id =>', countryId);

        return {
            id: countryId,
            group: 'A',
            name: 'Brasil',
            prefix: 'BRA',
            teamName: 'Federação Brasileira De Futebol'
        };

        // throw new Error("Method not implemented.");
    }

    public async getCountryByPrefix(prefix: string): Promise<ICountryModel> {

        console.log('prefix =>', prefix);

        return {
            id: 1,
            group: 'A',
            name: 'Brasil',
            prefix: prefix,
            teamName: 'Federação Brasileira De Futebol'
        };

        // throw new Error("Method not implemented.");
    }
    
}