import { IPlayerDetailModel } from "../../../../domain/models/player/player-detail.model";

/**
 * ### Player Service Actions
 * Interface for player service
 * 
 * @interface IPlayerService
 */
export interface IPlayerService {

    /**
     * Get player by id - sticker code
     * @param playerId
     */
    getPlayerById(playerId: string): Promise<IPlayerDetailModel>;

}