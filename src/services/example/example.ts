import { IExampleService } from "../../common/domain/services/example/example.interface";

/**
 * ### Example Service
 * 
 * @implements IExampleService
 */
export class ExampleService implements IExampleService {

    /**
     * Example Service constructor
     */
    constructor() { }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public async getExample(): Promise<string> {
        
        return 'Hello world! NodeJS API';
    }
    
}