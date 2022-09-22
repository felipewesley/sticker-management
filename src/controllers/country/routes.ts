import express from "express";

import { CountryController } from "./controller";
import { ICountryController } from "../../common/domain/controllers/country/country-controller.interface";

import { CountryService } from "../../services/country/country-service";
import { CountryRepository } from "../../repositories/country/country-repository";

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
 * Get country details (by prefix)
 */
CountryControllerRoutes.get('/:prefix', Controller.getCountryByPrefix.bind(Controller));

/**
 * GET
 * Get country details page number
 */
CountryControllerRoutes.get('/per-page/:pageNumber', Controller.getCountryByPageNumber.bind(Controller));
