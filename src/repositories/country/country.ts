import { CountryEnum } from "../../common/domain/enums/country/country.enum";
import { CountryEntity } from "../../common/entities/country/country.entity";
import { ICountryRepository } from "../../common/domain/repositories/country/country.interface";

/**
 * ### Country Repository
 * 
 * @implements ICountryRepository
 */
export class CountryRepository implements ICountryRepository {

    /**
     * Country repository constructor
     */
    constructor() { }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getCountryById(countryId: CountryEnum): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }

    public async getCountryByPrefix(prefix: string): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }

}