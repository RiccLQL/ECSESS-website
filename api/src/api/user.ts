/**
 * @description Central USER class for admin routes for convenient export to user.js
 * @author Ricky Liu
 */

import express from 'express';
export const user = express.Router();
import { createConnections, Models, ModelType } from '../mongo';

// import controller methods
import { handler } from '../controller/template';
import { Method } from './methods';
import { emailSender } from '../controller/email';

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
const emailBase = "/email";
const photosBase = "/photos";
const jobsBase = "/jobs";
const councilBase = "/council";

// events
/** GET upcoming events, paginated */
user.get(`${eventsBase}`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.GETPAGINATEDBY, "Could not fetch paginated response of upcoming events", "Fetched paginated response of upcoming events successfully", {date: { $gte: Date.now() }}, { 'date': 1 }, req.query.paginationIndex)});

/** GET events collection size */
user.get(`${eventsBase}/size`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.GETSIZE, "Could not get events collection size", "Fetched events collection size successfully")});

/** GET upcoming events of a specific category within a time frame */
user.get(`${eventsBase}/byCategory/month`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.GETWITHINTIME, "Could not fetch response of upcoming events within a timeframe", "Fetched response of upcoming events within a timeframe successfully", { category: req.query.category, date: { $lte: req.query.date, $gte: Date.now() } }, { 'date': 1 })});

/** GET all events of a specific category */
user.get(`${eventsBase}/byCategory`, async (req, res, next) => {await handler(req, res, next, models.Events, Method.GETBY, "Could not fetch response of upcoming events", "Fetched response of upcoming events successfully", { category: req.query.category })});
// resources

// news
/** GET featured news */
user.get(`${newsBase}/featured`, async (req, res, next) => {await handler(req, res, next, models.NewsModel, Method.GET, "Could not fetch news", "Fetched news successfully")});

// email

user.post(`${emailBase}/livewire`, async (req, res, next) => {await emailSender(req, res, next)});

// photos


// jobs


// council
/** GET executive members */
user.get(`${councilBase}/members/execs`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.GETBY, "Could not fetch execs", "Fetched execs successfully", { category: "Executive" })});

/** GET representatives */
user.get(`${councilBase}/members/reps`, async (req, res, next) => {await handler(req, res, next, models.Members, Method.GETBY, "Could not fetch reps", "Fetched reps successfully", { category: "Representative" })});
