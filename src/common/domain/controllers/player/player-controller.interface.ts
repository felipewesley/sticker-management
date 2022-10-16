import { NextFunction, Request, Response } from "express";

/**
 * ### Player Controller Actions
 * Interface for player controller
 * 
 * @interface IPlayerController
 */
export interface IPlayerController {

    /**
     * Get player details by id - sticker code
     * @param req 
     * @param res 
     * @param next 
     */
    getPlayerById(req: Request, res: Response, next?: NextFunction): Promise<void>;

}