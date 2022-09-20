import express from "express";

import { CountryController } from "./controller";
import { ICountryController } from "../../common/domain/controllers/country/country.interface";

import { CountryService } from "../../services/country/country";
import { CountryRepository } from "../../repositories/country/country";

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Repositories
// ----------------------------------------------------------------------------------------------------

const countryRepository = new CountryRepository();

// ----------------------------------------------------------------------------------------------------
// @ Dependencies - Services
// ----------------------------------------------------------------------------------------------------

const countryService = new CountryService(countryRepository);

// ----------------------------------------------------------------------------------------------------
// @ Controller and router instance
// ----------------------------------------------------------------------------------------------------

const Controller: ICountryController = new CountryController(countryService);
export const CountryControllerRoutes = express.Router();

// ----------------------------------------------------------------------------------------------------
// @ Routes
// ----------------------------------------------------------------------------------------------------

/**
 * GET
 * Get country details (by Id)
 */
CountryControllerRoutes.get('/id/:countryId', Controller.getCountryById.bind(Controller));

/**
 * GET
 * Get country details (by prefix)
 */
CountryControllerRoutes.get('/prefix/:prefix', Controller.getCountryByPrefix.bind(Controller));