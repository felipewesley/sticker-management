import { IStadiumModel } from "../../common/domain/models/stadium/stadium.model";
import { IStadiumRepository } from "../../common/domain/repositories/stadium/stadium.interface";
import { IStadiumService } from "../../common/domain/services/stadium/stadium.interface";

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

        throw new Error("Method not implemented.");
    }
    
}