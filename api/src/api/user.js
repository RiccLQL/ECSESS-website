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

//events
/** GET 5 upcoming events by date */
api.get(`${eventsBase}/date`, (req, res, next) => {handler(req, res, next, models.Events, "GETORDERBY", "Could not fetch upcoming events", "Fetched upcoming events successfully", undefined, undefined, undefined, { 'date': -1 })});

//resources

//news
/** GET featured news */
api.get(`${newsBase}/featured`, (req, res, next) => {handler(req, res, next, models.News, "GET", "Could not fetch news", "Fetched news successfully")});

//livewire


//photos


//jobs

module.exports = api;