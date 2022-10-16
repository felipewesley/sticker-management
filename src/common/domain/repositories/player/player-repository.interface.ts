import { PlayerEntity } from "../../../../domain/entities/player/player.entity";

/**
 * ### Player Repository Actions
 * Interface for player repository
 * 
 * @interface IPlayerRepository
 */
export interface IPlayerRepository {

    /**
     * Get player by id - Sticker code
     * @param playerId 
     */
    getPlayerById(playerId: string): Promise<PlayerEntity>;

}