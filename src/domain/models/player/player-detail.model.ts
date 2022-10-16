import { INameable } from "../../interfaces/nameable.interface";
import { IIdentifiable } from "../../interfaces/identifiable.interface";

import { ICountryModel } from "../country/country.model";

export interface IPlayerDetailModel extends IIdentifiable<string>, INameable {

    position: string;
    birthDate: Date;
    height: number;
    weight: number;
    nationalTeamDebutYear: number;
    country: ICountryModel;
    hasExtraCromo?: boolean;

}

export class PlayerDetailModel implements IPlayerDetailModel {

    public id: string;
    public name: string;
    public position: string;
    public birthDate: Date;
    public height: number;
    public weight: number;
    public country: ICountryModel;
    public nationalTeamDebutYear: number;
    public hasExtraCromo?: boolean;

    constructor() { }

}