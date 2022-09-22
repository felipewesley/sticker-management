import { CountryGroup } from "../../../../domain/types/country-group.type";
import { INameable } from "../../interfaces/nameable.interface";
import { IIdentifiable } from "../../interfaces/identifiable.interface";
import { CountryEnum } from "../../../../domain/enums/country/country.enum";

export interface ICountryModel extends IIdentifiable<CountryEnum>, INameable {

    prefix: string;
    teamName: string;
    group: CountryGroup;

}

export class CountryModel implements ICountryModel {

    public id: CountryEnum;
    public name: string;
    public prefix: string;
    public teamName: string;
    public group: CountryGroup;

    constructor() { }

}