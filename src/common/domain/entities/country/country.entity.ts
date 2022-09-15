import { CountryEnum } from "../../enums/country/country.enum";
import { CountryGroup } from "../../types/country-group.type";

export interface CountryEntity {

    id: CountryEnum;
    prefix: string;
    name: string;
    teamName: string;
    teamPictureId: string;
    group: CountryGroup;

}