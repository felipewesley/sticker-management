import { NextFunction, Request, Response } from "express";

/**
 * ### Example Controller Actions
 * Interface for example controller
 * 
 * @interface IExampleController
 */
export interface IExampleController {

    /**
     * Get a example
     * @param req 
     * @param res 
     * @param next 
     */
    getExample(req: Request, res: Response, next?: NextFunction): Promise<void>;

}