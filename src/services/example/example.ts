import { IExampleService } from "../../common/domain/services/example.interface";

export class ExampleService implements IExampleService {

    constructor() { }

    public async getExample(): Promise<string> {
        
        return 'Hello world! NodeJS API';
    }
    
}