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
/** GET 5 upcoming events by date */
api.get(`${eventsBase}/date`, async (req, res, next) => {await handler(req, res, next, models.Events, "GETORDERBY", "Could not fetch upcoming events", "Fetched upcoming events successfully", undefined, undefined, undefined, { 'date': -1 })});

//resources

//news
/** GET featured news */
api.get(`${newsBase}/featured`, async (req, res, next) => {await handler(req, res, next, models.News, "GET", "Could not fetch news", "Fetched news successfully")});

//livewire


//photos


//jobs


// council
/** GET executive members */
api.get(`${councilBase}/members/execs`, async (req, res, next) => {await handler(req, res, next, models.Execs, "GET", "Could not fetch execs", "Fetched execs successfully")});

/** GET representatives */
api.get(`${councilBase}/members/reps`, async (req, res, next) => {await handler(req, res, next, models.Reps, "GET", "Could not fetch reps", "Fetched reps successfully")});

module.exports = api;