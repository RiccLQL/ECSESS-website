/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */

const express = require("express");
const api = express.Router();
const { News, Events, EventCategories } = require("../mongo");
const { createConnections } = require("../mongo");

//import controller methods
const { handler } = require("../controller/template");

//models
let models = null;
async function syncModels() {
    models = await createConnections();
    console.log("Done setting up connections");
}
syncModels();

//base urls
const eventsBase = "/events";
const resourcesBase = "/resources";
const newsBase = "/news";
const livewireBase = "/livewire";
const photosBase = "/photos";
const jobsBase = "/jobs";
const councilBase = "/council";

//events
/** GET upcoming events, paginated */
api.get(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "GETPAGINATED", "Could not fetch paginated response of upcoming events", "Fetched paginated response of upcoming events successfully", { 'date': 1 }, req.query.paginationIndex)});

/** GET events collection size */
api.get(`${eventsBase}/size`, async (req, res, next) => {await handler(req, res, next, models.Events, "GETSIZE", "Could not get events collection size", "Fetched events collection size successfully")});

/** GET upcoming events of a specific category within a time frame */
api.get(`${eventsBase}/byCategory/month`, async (req, res, next) => {await handler(req, res, next, models.Events, "GETWITHINTIME", "Could not fetch response of upcoming events within a timeframe", "Fetched response of upcoming events within a timeframe successfully", { category: req.query.category, date: { $lte: req.query.date } }, { 'date': 1 })});

/** GET all events of a specific category */
api.get(`${eventsBase}/byCategory`, async (req, res, next) => {await handler(req, res, next, models.Events, "GETBY", "Could not fetch response of upcoming events", "Fetched response of upcoming events successfully", { category: req.query.category })});
//resources

//news
/** GET featured news */
api.get(`${newsBase}/featured`, async (req, res, next) => {await handler(req, res, next, models.News, "GET", "Could not fetch news", "Fetched news successfully")});

//livewire


//photos


//jobs


// council
/** GET executive members */
api.get(`${councilBase}/members/execs`, async (req, res, next) => {await handler(req, res, next, models.Members, "GETBY", "Could not fetch execs", "Fetched execs successfully", { category: "Executive" })});

/** GET representatives */
api.get(`${councilBase}/members/reps`, async (req, res, next) => {await handler(req, res, next, models.Members, "GETBY", "Could not fetch reps", "Fetched reps successfully", { category: "Representative" })});

module.exports = api;