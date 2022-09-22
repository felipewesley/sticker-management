import { CountryEntity } from "../../../../domain/entities/country/country.entity";
import { CountryEnum } from "../../enums/country/country.enum";

/**
 * ### Country Repository Actions
 * Interface for country repository
 * 
 * @interface ICountryRepository
 */
export interface ICountryRepository {

    /**
     * Get country by page number
     * @param pageNumber 
     */
    getCountryByPageNumber(pageNumber: CountryEnum): Promise<CountryEntity>;

    /**
     * Get country by prefix
     * @param prefix 
     */
    getCountryByPrefix(prefix: string): Promise<CountryEntity>;

}