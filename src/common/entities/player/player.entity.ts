import { CountryEnum } from "../../domain/enums/country/country.enum";
import { PlayerPositionEnum } from "../../domain/enums/player/player-position.enum";

export interface PlayerEntity {

    id: string;
    name: string;
    position: PlayerPositionEnum;
    birthDate: Date;
    nationalTeamDebutDate: Date;
    height: number;
    weight: number;
    countryId: CountryEnum;
    hasExtraCromo: boolean;

}