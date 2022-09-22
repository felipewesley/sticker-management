import { BaseRepository } from "../../common/base/repository/base-repository";
import { IStadiumRepository } from "../../common/domain/repositories/stadium/stadium-repository.interface";
import { StadiumEntity } from "../../common/entities/stadium/stadium.entity";

/**
 * ### Stadium Repository
 * 
 * @implements IStadiumRepository
 */
export class StadiumRepository extends BaseRepository<StadiumEntity> implements IStadiumRepository {

    /**
     * Stadium repository constructor
     */
    constructor() {
        super('stadiums');
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getStadiumById(stadiumId: string): Promise<StadiumEntity> {

        const stadium = this.getAll().find(s => s.id == stadiumId);

        return stadium;
    }

}