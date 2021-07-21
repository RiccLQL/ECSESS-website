/**
 * @description Central ADMIN class for admin routes for convenient export to admin.js
 * @author Ricky Liu
 */

 import express from 'express';
 export const admin = express.Router();
 import { createConnections, Models, ModelType } from '../mongo';

 // import controller methods
 import { handler } from '../controller/template';
 import { Method } from './methods';

 // models
 let models: Models = null;
 async function syncModels() {
     models = await createConnections();
     console.log("Done setting up connections");
 }
 syncModels();

// base urls
const eventsBase = "/events";
const resourcesBase = "/resources";
const newsBase = "/news";
const livewireBase = "/livewire";
const photosBase = "/photos";
const jobsBase = "/jobs";
const councilBase = "/council";

// events
/** POST event */
admin.post(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.POST, "Could not post event", "Posted event successfully")});

/** GET event categories */
admin.get(`${eventsBase}/categories`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, Method.GET, "Could not fetch event categories", "Fetched event categories successfully")});

/** POST event category */
admin.post(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, Method.POST, "Could not post event category", "Posted event category successfully")});

/** PUT event category */
admin.put(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, Method.PUT, "Could not update event category", "Updated event category successfully", req.body._id)});

/** DELETE event category */
admin.delete(`${eventsBase}/category`, async (req, res, next) => {await handler(req, res, next, models.EventCategories, Method.DELETE, "Could not delete event category", "Deleted event category successfully", req.body._id)});

/** GET events */
admin.get(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.GET, "Could not fetch all events", "Fetched all events successfully")});

/** PUT event */
admin.put(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.PUT, "Could not update event", "Updated event successfully", req.body._id)});

/** DELETE event */
admin.delete(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.DELETE, "Could not delete event", "Deleted event successfully", req.body._id)});

// resources
/** POST featured resource */
admin.post(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, Method.POST, "Could not post resource", "Posted resource successfully")});

/** GET featured resources */
admin.get(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, Method.GET, "Could not fetch resources", "Fetched resources successfully")});

/** PUT featured resource */
admin.put(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, Method.PUT, "Could not update resource", "Updated resource successfully", req.body._id)});

/** DELETE featured resource */
admin.delete(`${resourcesBase}`, async (req, res, next) => {await handler(req, res, next, models.Resources, Method.DELETE, "Could not delete resource", "Deleted resource successfully", req.body._id)});

/** GET resource categories */
admin.get(`${resourcesBase}/categories`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, Method.GET, "Could not fetch resource categories", "Fetched resource categories successfully")});

/** POST resource category */
admin.post(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, Method.POST, "Could not post resource category", "Posted resource category successfully")});

/** PUT resource category */
admin.put(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, Method.PUT, "Could not update resource category", "Updated resource category successfully", req.body._id)});

/** DELETE resource category */
admin.delete(`${resourcesBase}/category`, async (req, res, next) => {await handler(req, res, next, models.ResourceCategories, Method.DELETE, "Could not delete resource category", "Deleted resource category successfully", req.body._id)});

// news
/** POST featured news */
admin.post(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.NewsModel, Method.POST, "Could not post news", "Posted news successfully")});

/** GET featured news */
admin.get(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.NewsModel, Method.GET, "Could not fetch news", "Fetched news successfully")});

/** PUT featured news */
admin.put(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.NewsModel, Method.PUT, "Could not update news", "Updated news successfully", req.body._id)});

/** DELETE featured news */
admin.delete(`${newsBase}`, async (req, res, next) => {await handler(req, res, next, models.NewsModel, Method.DELETE, "Could not delete news", "Deleted news successfully", req.body._id)});

// livewire


// photos


// jobs


// council
/** POST member */
admin.post(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.POST, "Could not post member", "Posted member successfully")});

/** GET executive members */
admin.get(`${councilBase}/members/execs`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.GETBY, "Could not fetch execs", "Fetched execs successfully", { category: "Executive" })});

/** GET representatives */
admin.get(`${councilBase}/members/reps`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.GETBY, "Could not fetch reps", "Fetched reps successfully", { category: "Representative" })});

/** PUT member */
admin.put(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.PUT, "Could not update member", "Updated member successfully", req.body._id)});

/** DELETE member */
admin.delete(`${councilBase}/member`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.DELETE, "Could not update member", "Updated member successfully", req.body._id)});