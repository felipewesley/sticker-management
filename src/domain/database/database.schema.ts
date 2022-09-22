import { CountryEntity } from "../entities/country/country.entity"
import { PlayerEntity } from "../entities/player/player.entity";
import { StadiumEntity } from "../entities/stadium/stadium.entity";

export type DatabaseSchema = {

    countries: CountryEntity[];

    stadiums: StadiumEntity[];

    players: PlayerEntity[];

}