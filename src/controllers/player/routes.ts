import express from "express";
import { IPlayerController } from "../../common/domain/controllers/player/player-controller.interface";
import { CountryRepository } from "../../repositories/country/country-repository";
import { PlayerRepository } from "../../repositories/player/player-repository";
import { PlayerService } from "../../services/player/player-service";
import { PlayerController } from "./controller";

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Repositories
// ----------------------------------------------------------------------------------------------------

const playerRepository = new PlayerRepository();
const countryRepository = new CountryRepository();

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Services
// ----------------------------------------------------------------------------------------------------

const playerService = new PlayerService(playerRepository, countryRepository);

// ----------------------------------------------------------------------------------------------------
// @ Controller and router instance
// ----------------------------------------------------------------------------------------------------

const Controller: IPlayerController = new PlayerController(playerService);
export const PlayerControllerRoutes = express.Router();

// ----------------------------------------------------------------------------------------------------
// @ Routes
// ----------------------------------------------------------------------------------------------------

/**
 * GET
 * Get player by id
 */
PlayerControllerRoutes.get('/:playerId', Controller.getPlayerById.bind(Controller));
