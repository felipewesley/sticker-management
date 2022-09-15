/**
 * ### Example Service Actions
 * Interface for example service
 * 
 * @interface IExampleService
 */
export interface IExampleService {

    /**
     * Get a example
     */
    getExample(): Promise<string>;

}