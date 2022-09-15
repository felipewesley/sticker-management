import { IIdentifiable } from "../../interfaces/identifiable.interface";
import { INameable } from "../../interfaces/nameable.interface";

export interface IPlayerListModel extends IIdentifiable, INameable {

    countryId: string;
    hasExtraCromo: boolean;

}

export class PlayerListModel implements IPlayerListModel {

    public id: string;
    public name: string;
    public countryId: string;
    public hasExtraCromo: boolean;

    constructor() { }

}