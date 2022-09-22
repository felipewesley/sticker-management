import { INameable } from "../../../common/domain/interfaces/nameable.interface";
import { IIdentifiable } from "../../../common/domain/interfaces/identifiable.interface";

export interface IStadiumModel extends IIdentifiable<string>, INameable {

    capacity: number;
    openingMatch: boolean;
    finalMatch: boolean;

}

export class StadiumModel implements IStadiumModel {

    public id: string;
    public name: string;
    public capacity: number;
    public openingMatch: boolean;
    public finalMatch: boolean;

    constructor() { }

}