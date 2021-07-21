"use strict";
/**
 * @description Central USER class for admin routes for convenient export to user.js
 * @author Ricky Liu
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = __importDefault(require("express"));
exports.user = express_1.default.Router();
const mongo_1 = require("../mongo");
// import controller methods
const template_1 = require("../controller/template");
const methods_1 = require("./methods");
const email_1 = require("../controller/email");
// models
let models = null;
function syncModels() {
    return __awaiter(this, void 0, void 0, function* () {
        models = yield mongo_1.createConnections();
        console.log("Done setting up connections");
    });
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
exports.user.get(`${eventsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.GETPAGINATEDBY, "Could not fetch paginated response of upcoming events", "Fetched paginated response of upcoming events successfully", { date: { $gte: Date.now() } }, { 'date': 1 }, req.query.paginationIndex); }));
/** GET events collection size */
exports.user.get(`${eventsBase}/size`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.GETSIZE, "Could not get events collection size", "Fetched events collection size successfully"); }));
/** GET upcoming events of a specific category within a time frame */
exports.user.get(`${eventsBase}/byCategory/month`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.GETWITHINTIME, "Could not fetch response of upcoming events within a timeframe", "Fetched response of upcoming events within a timeframe successfully", { category: req.query.category, date: { $lte: req.query.date, $gte: Date.now() } }, { 'date': 1 }); }));
/** GET all events of a specific category */
exports.user.get(`${eventsBase}/byCategory`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.GETBY, "Could not fetch response of upcoming events", "Fetched response of upcoming events successfully", { category: req.query.category }); }));
// resources
// news
/** GET featured news */
exports.user.get(`${newsBase}/featured`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.NewsModel, methods_1.Method.GET, "Could not fetch news", "Fetched news successfully"); }));
// email
exports.user.post(`${emailBase}/livewire`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield email_1.emailSender(req, res, next); }));
// photos
// jobs
// council
/** GET executive members */
exports.user.get(`${councilBase}/members/execs`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.GETBY, "Could not fetch execs", "Fetched execs successfully", { category: "Executive" }); }));
/** GET representatives */
exports.user.get(`${councilBase}/members/reps`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.GETBY, "Could not fetch reps", "Fetched reps successfully", { category: "Representative" }); }));
//# sourceMappingURL=user.js.map