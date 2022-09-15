import { CountryGroup } from "../../types/country-group.type";
import { INameable } from "../../interfaces/nameable.interface";

export interface ICountryModel extends INameable {

    prefix: string;
    teamName: string;
    group: CountryGroup;

}

export class CountryModel implements ICountryModel {

    public prefix: string;
    public name: string;
    public teamName: string;
    public group: CountryGroup;

    constructor() { }

}