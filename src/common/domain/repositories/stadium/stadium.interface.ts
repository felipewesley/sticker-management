import { StadiumEntity } from "../../../entities/stadium/stadium.entity";

/**
 * ### Stadium Repository Actions
 * Interface for stadium repository
 * 
 * @interface IStadiumRepository
 */
export interface IStadiumRepository {

    /**
     * Get stadium by id - Sticker code
     * @param stadiumId 
     */
    getStadiumById(stadiumId: string): Promise<StadiumEntity>;

}