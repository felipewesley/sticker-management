import { CountryEnum } from "../../enums/country/country.enum";
import { PlayerPositionEnum } from "../../enums/player/player-position.enum";

export interface PlayerEntity {

    id: string;
    name: string;
    position: PlayerPositionEnum;
    birthDate: Date;
    nationalTeamDebutYear: number;
    height: number;
    weight: number;
    countryId: CountryEnum;
    hasExtraCromo?: boolean;

}