import { CountryEnum } from "../../domain/enums/country/country.enum";
import { CountryGroup } from "../../domain/types/country-group.type";

export interface CountryEntity {

    id: CountryEnum;
    prefix: string;
    name: string;
    teamName: string;
    teamPictureId: string;
    group: CountryGroup;

}