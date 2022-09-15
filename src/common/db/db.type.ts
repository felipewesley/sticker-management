import { CountryEntity } from "../domain/entities/country/country.entity"
import { PlayerEntity } from "../domain/entities/player/player.entity";
import { StadiumEntity } from "../domain/entities/stadium/stadium.entity";

export type DatabaseSchema = {

    countries: CountryEntity[];

    stadiums: StadiumEntity[];

    players: PlayerEntity[];

}