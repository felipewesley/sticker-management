import { IIdentifiable } from "../../../common/domain/interfaces/identifiable.interface";
import { INameable } from "../../../common/domain/interfaces/nameable.interface";

export interface IPlayerListModel extends IIdentifiable<string>, INameable {

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