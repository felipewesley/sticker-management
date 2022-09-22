import { CountryEnum } from "../../common/domain/enums/country/country.enum";
import { CountryEntity } from "../../common/entities/country/country.entity";
import { ICountryRepository } from "../../common/domain/repositories/country/country-repository.interface";
import { BaseRepository } from "../../common/base/repository/base-repository";

/**
 * ### Country Repository
 * 
 * @implements ICountryRepository
 */
export class CountryRepository extends BaseRepository<CountryEntity> implements ICountryRepository {

    /**
     * Country repository constructor
     */
    constructor() {
        super('countries');
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getCountryByPageNumber(pageNumber: CountryEnum): Promise<CountryEntity> {

        const country = this.getAll().find(c => c.id == pageNumber);

        if (country)
            return country;

        const countryInSecondayPage = this.getAll().find(c => (c.id + 1) == pageNumber);

        if (countryInSecondayPage)
            return countryInSecondayPage;

        return null;
    }

    public async getCountryByPrefix(prefix: string): Promise<CountryEntity> {

        const country = this.getAll().find(c => c.prefix == prefix);

        return country;
    }

}