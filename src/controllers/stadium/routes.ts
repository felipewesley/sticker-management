import express from "express";
import { IStadiumController } from "../../common/domain/controllers/stadium/stadium.interface";
import { StadiumRepository } from "../../repositories/stadium/stadium";
import { StadiumService } from "../../services/stadium/stadium";
import { StadiumController } from "./controller";

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Repositories
// ----------------------------------------------------------------------------------------------------

const stadiumRepository = new StadiumRepository();

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Services
// ----------------------------------------------------------------------------------------------------

const stadiumService = new StadiumService(stadiumRepository);

// ----------------------------------------------------------------------------------------------------
// @ Controller and router instance
// ----------------------------------------------------------------------------------------------------

const Controller: IStadiumController = new StadiumController(stadiumService);
export const StadiumControllerRoutes = express.Router();

// ----------------------------------------------------------------------------------------------------
// @ Routes
// ----------------------------------------------------------------------------------------------------

/**
 * GET
 * Get stadium details (by Id)
 */
StadiumControllerRoutes.get('/:stadiumId', Controller.getStadiumById.bind(Controller));
