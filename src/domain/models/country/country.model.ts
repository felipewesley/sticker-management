import { CountryGroup } from "../../types/country-group.type";
import { INameable } from "../../../common/domain/interfaces/nameable.interface";
import { IIdentifiable } from "../../../common/domain/interfaces/identifiable.interface";
import { CountryEnum } from "../../enums/country/country.enum";

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