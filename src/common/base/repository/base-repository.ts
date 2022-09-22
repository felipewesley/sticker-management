import { DATABASE } from "../../../db";
import { DatabaseSchema } from "../../../domain/database/database.schema";

/**
 * ### Base Repository
 */
export abstract class BaseRepository<T> {

    // ----------------------------------------------------------------------------------------------------
    // @ Accessors
    // ----------------------------------------------------------------------------------------------------

    /** Getter - Database */
    private get database() {
        return DATABASE;
    }

    /**
     * Base repository constructor
     */
    constructor(
        private _tableName: keyof DatabaseSchema
    ) {
        // Check the table name
        if ( !this.database[_tableName] )
            throw new Error(`Invalid table name`);
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    /**
     * Get all registers of table
     * @returns 
     */
    public getAll(): T[] {
        return this.database[this._tableName] as T[];
    }

}