import { IStadiumModel } from "../../../../domain/models/stadium/stadium.model";

/**
 * ### Stadium Service Actions
 * Interface for stadium service
 * 
 * @interface IStadiumService
 */
export interface IStadiumService {

    /**
     * Get stadium by id - sticker code
     * @param stadiumId
     */
    getStadiumById(stadiumId: string): Promise<IStadiumModel>;

}