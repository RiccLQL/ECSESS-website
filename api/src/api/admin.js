/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */

const express = require("express");
const api = express.Router();
const { createConnections } = require("../mongo");

//import controller methods
const { handler } = require("../controller/template");

//models
let models = null;
async function syncModels() {
    models = await createConnections();
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
/** POST event */
api.post(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "POST", "Could not post event", "Posted event successfully")});

/** GET event categories */
api.get(`${eventsBase}/categories`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "GET", "Could not fetch event categories", "Fetched event categories successfully")});

/** POST event category */
api.post(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "POST", "Could not post event category", "Posted event category successfully")});

/** GET events */
api.get(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "GET", "Could not fetch all events", "Fetched all events successfully")});
//resources

//news
/** POST featured news */ 
api.post(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.News, "POST", "Could not post news", "Posted news successfully")});

//livewire


//photos


//jobs


//council
/** POST exec */
api.post(`${councilBase}/exec`, async (req, res, next) => {await handler(req, res, next, models.Execs, "POST", "Could not post exec", "Posed exec successfully")});

/** POST rep */
api.post(`${councilBase}/rep`, async (req, res, next) => {await handler(req, res, next, models.Reps, "POST", "Could not post rep", "Posted rep successfully")});

module.exports = api;