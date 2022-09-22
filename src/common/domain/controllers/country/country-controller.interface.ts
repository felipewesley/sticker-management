import { NextFunction, Request, Response } from "express";

/**
 * ### Country Controller Actions
 * Interface for country controller
 * 
 * @interface ICountryController
 */
export interface ICountryController {

    /**
     * Get a country details by page number
     * @param req 
     * @param res 
     * @param next 
     */
    getCountryByPageNumber(req: Request, res: Response, next?: NextFunction): Promise<void>;

    /**
     * Get a country details by prefix
     * @param req 
     * @param res 
     * @param next 
     */
    getCountryByPrefix(req: Request, res: Response, next?: NextFunction): Promise<void>;

}