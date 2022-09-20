import { CountryEntity } from "../../../entities/country/country.entity";
import { CountryEnum } from "../../enums/country/country.enum";

/**
 * ### Country Repository Actions
 * Interface for country repository
 * 
 * @interface ICountryRepository
 */
export interface ICountryRepository {

    /**
     * Get country by id (page number)
     * @param countryId 
     */
    getCountryById(countryId: CountryEnum): Promise<CountryEntity>;

    /**
     * Get country by prefix
     * @param prefix 
     */
    getCountryByPrefix(prefix: string): Promise<CountryEntity>;

}