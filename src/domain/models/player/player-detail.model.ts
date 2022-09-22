import { INameable } from "../../../common/domain/interfaces/nameable.interface";
import { IIdentifiable } from "../../../common/domain/interfaces/identifiable.interface";

import { ICountryModel } from "../country/country.model";
import { PlayerPositionEnum } from "../../enums/player/player-position.enum";

export interface IPlayerDetailModel extends IIdentifiable<string>, INameable {

    position: PlayerPositionEnum;
    birthDate: Date;
    height: number;
    weight: number;
    country: ICountryModel;
    hasExtraCromo: boolean;

}

export class PlayerDetailModel implements IPlayerDetailModel {

    public id: string;
    public name: string;
    public position: PlayerPositionEnum;
    public birthDate: Date;
    public height: number;
    public weight: number;
    public country: ICountryModel;
    public hasExtraCromo: boolean;

    constructor() { }

}