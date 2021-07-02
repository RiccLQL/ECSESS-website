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
/** POST event */
api.post(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "POST", "Could not post event", "Posted event successfully")});

/** GET event categories */
api.get(`${eventsBase}/categories`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "GET", "Could not fetch event categories", "Fetched event categories successfully")});

/** POST event category */
api.post(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "POST", "Could not post event category", "Posted event category successfully")});

/** PUT event category */
api.put(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "PUT", "Could not update event category", "Updated event category successfully", req.body._id)});

/** DELETE event category */
api.delete(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, "DELETE", "Could not delete event category", "Deleted event category successfully", req.body._id)});

/** GET events */
api.get(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "GET", "Could not fetch all events", "Fetched all events successfully")});

/** PUT event */
api.put(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "PUT", "Could not update event", "Updated event successfully", req.body._id)});

/** DELETE event */
api.delete(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, "DELETE", "Could not delete event", "Deleted event successfully", req.body._id)});

//resources
/** POST featured resource */ 
api.post(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, "POST", "Could not post resource", "Posted resource successfully")});

/** GET featured resources */
api.get(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, "GET", "Could not fetch resources", "Fetched resources successfully")});

/** PUT featured resource */
api.put(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, "PUT", "Could not update resource", "Updated resource successfully", req.body._id)});

/** DELETE featured resource */
api.delete(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, "DELETE", "Could not delete resource", "Deleted resource successfully", req.body._id)});

/** GET resource categories */
api.get(`${resourcesBase}/categories`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, "GET", "Could not fetch resource categories", "Fetched resource categories successfully")});

/** POST resource category */
api.post(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, "POST", "Could not post resource category", "Posted resource category successfully")});

/** PUT resource category */
api.put(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, "PUT", "Could not update resource category", "Updated resource category successfully", req.body._id)});

/** DELETE resource category */
api.delete(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, "DELETE", "Could not delete resource category", "Deleted resource category successfully", req.body._id)});

//news
/** POST featured news */ 
api.post(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.News, "POST", "Could not post news", "Posted news successfully")});

/** GET featured news */
api.get(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.News, "GET", "Could not fetch news", "Fetched news successfully")});

/** PUT featured news */
api.put(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.News, "PUT", "Could not update news", "Updated news successfully", req.body._id)});

/** DELETE featured news */
api.delete(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.News, "DELETE", "Could not delete news", "Deleted news successfully", req.body._id)});

//livewire


//photos


//jobs


//council
/** POST member */
api.post(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, "POST", "Could not post member", "Posted member successfully")});

/** GET executive members */
api.get(`${councilBase}/members/execs`, async (req, res, next) => {await handler(req, res, next, models.Members, "GETBY", "Could not fetch execs", "Fetched execs successfully", { category: "Executive" })});

/** GET representatives */
api.get(`${councilBase}/members/reps`, async (req, res, next) => {await handler(req, res, next, models.Members, "GETBY", "Could not fetch reps", "Fetched reps successfully", { category: "Representative" })});

/** PUT member */
api.put(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, "PUT", "Could not update member", "Updated member successfully", req.body._id)});

/** DELETE member */
api.delete(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, "DELETE", "Could not update member", "Updated member successfully", req.body._id)});

module.exports = api;