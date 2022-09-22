import { CountryEnum } from "../../../../domain/enums/country/country.enum";
import { ICountryModel } from "../../models/country/country.model";

/**
 * ### Country Service Actions
 * Interface for country service
 * 
 * @interface ICountryService
 */
export interface ICountryService {

    /**
     * Get country by page number
     * @param pageNumber 
     */
    getCountryByPageNumber(pageNumber: CountryEnum): Promise<ICountryModel>;

    /**
     * Get country by prefix
     * @param prefix 
     */
    getCountryByPrefix(prefix: string): Promise<ICountryModel>;

}