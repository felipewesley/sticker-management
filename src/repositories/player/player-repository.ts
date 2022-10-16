import { BaseRepository } from "../../common/base/repository/base-repository";
import { PlayerEntity } from "../../domain/entities/player/player.entity";
import { IPlayerRepository } from "../../common/domain/repositories/player/player-repository.interface";

/**
 * ### Stadium Repository
 * 
 * @implements IPlayerRepository
 */
export class PlayerRepository extends BaseRepository<PlayerEntity> implements IPlayerRepository {

    /**
     * Player repository constructor
     */
    constructor() {
        super('players');
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getPlayerById(playerId: string): Promise<PlayerEntity> {
        
        const player = this.getAll().find(s => s.id == playerId);

        return player;
    }

}