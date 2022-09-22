import { IStadiumModel, StadiumModel } from "../../common/domain/models/stadium/stadium.model";
import { IStadiumRepository } from "../../common/domain/repositories/stadium/stadium-repository.interface";
import { IStadiumService } from "../../common/domain/services/stadium/stadium-service.interface";

/**
 * ### Stadium Service
 * 
 * @implements IStadiumService
 */
export class StadiumService implements IStadiumService {

    /**
     * Stadium Service constructor
     */
    constructor(
        private _stadiumRepository: IStadiumRepository
    ) { }
    
    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------
    
    public async getStadiumById(stadiumId: string): Promise<IStadiumModel> {

        const stadium = await this._stadiumRepository.getStadiumById(stadiumId);

        if (!stadium)
        {
            throw new Error(`The requested stadium was not found`);
            // return null;
        }

        const model = new StadiumModel();

        model.id = stadium.id;
        model.name = stadium.name;
        model.capacity = stadium.capacity;
        model.openingMatch = stadium.openingMatch;
        model.finalMatch = stadium.finalMatch;

        return model;
    }
    
}