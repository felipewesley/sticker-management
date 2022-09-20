import { DATABASE } from "../../../db";

/**
 * ### Base Repository
 */
export abstract class BaseRepository {

    // ----------------------------------------------------------------------------------------------------
    // @ Accessors
    // ----------------------------------------------------------------------------------------------------

    /** Getter - Database */
    public get database() {
        return DATABASE;
    }

    /**
     * Base repository constructor
     */
    constructor() { }

}