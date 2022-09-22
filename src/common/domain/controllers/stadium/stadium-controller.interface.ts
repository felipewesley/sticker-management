import { NextFunction, Request, Response } from "express";

/**
 * ### Stadium Controller Actions
 * Interface for stadium controller
 * 
 * @interface IStadiumController
 */
export interface IStadiumController {

    /**
     * Get a stadium details by id - sticker code
     * @param req 
     * @param res 
     * @param next 
     */
    getStadiumById(req: Request, res: Response, next?: NextFunction): Promise<void>;

}