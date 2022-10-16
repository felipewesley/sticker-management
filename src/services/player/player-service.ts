import { NotFoundError } from "../../core/errors/not-found.error";
import { IPlayerService } from "../../common/domain/services/player/player-service.interface";
import { IPlayerDetailModel, PlayerDetailModel } from "../../domain/models/player/player-detail.model";
import { IPlayerRepository } from "../../common/domain/repositories/player/player-repository.interface";
import { ICountryRepository } from "../../common/domain/repositories/country/country-repository.interface";
import { PlayerPositionNameEnum } from "../../domain/enums/player/player-position-name.enum";

/**
 * ### Stadium Service
 * 
 * @implements IPlayerService
 */
export class PlayerService implements IPlayerService {

    /**
     * Player Service constructor
     */
    constructor(
        private _playerRepository: IPlayerRepository,
        private _countryRepository: ICountryRepository
    ) { }
    
    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------
    
    public async getPlayerById(playerId: string): Promise<IPlayerDetailModel> {

        const player = await this._playerRepository.getPlayerById(playerId);

        if (!player)
            throw new NotFoundError(`The requested player was not found`);

        const country = await this._countryRepository.getCountryByPageNumber(player.countryId) ?? null;

        const model = new PlayerDetailModel();

        model.id = player.id;
        model.name = player.name;
        model.position = PlayerPositionNameEnum[player.position];
        model.height = player.height;
        model.weight = player.weight;
        model.birthDate = player.birthDate;
        model.nationalTeamDebutYear = player.nationalTeamDebutYear;
        model.country = null;

        if (country) {

            model.country = {
                id: country.id,
                name: country.name,
                group: country.group,
                prefix: country.prefix,
                teamName: country.teamName
            };
        }

        return model;
    }
    
}