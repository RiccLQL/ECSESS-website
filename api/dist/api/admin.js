"use strict";
/**
 * @description Central ADMIN class for admin routes for convenient export to admin.js
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
exports.admin = void 0;
const express_1 = __importDefault(require("express"));
exports.admin = express_1.default.Router();
const mongo_1 = require("../mongo");
// import controller methods
const template_1 = require("../controller/template");
const methods_1 = require("./methods");
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
const livewireBase = "/livewire";
const photosBase = "/photos";
const jobsBase = "/jobs";
const councilBase = "/council";
// events
/** POST event */
exports.admin.post(`${eventsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.POST, "Could not post event", "Posted event successfully"); }));
/** GET event categories */
exports.admin.get(`${eventsBase}/categories`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.EventCategories, methods_1.Method.GET, "Could not fetch event categories", "Fetched event categories successfully"); }));
/** POST event category */
exports.admin.post(`${eventsBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.EventCategories, methods_1.Method.POST, "Could not post event category", "Posted event category successfully"); }));
/** PUT event category */
exports.admin.put(`${eventsBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.EventCategories, methods_1.Method.PUT, "Could not update event category", "Updated event category successfully", req.body._id); }));
/** DELETE event category */
exports.admin.delete(`${eventsBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.EventCategories, methods_1.Method.DELETE, "Could not delete event category", "Deleted event category successfully", req.body._id); }));
/** GET events */
exports.admin.get(`${eventsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.GET, "Could not fetch all events", "Fetched all events successfully"); }));
/** PUT event */
exports.admin.put(`${eventsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.PUT, "Could not update event", "Updated event successfully", req.body._id); }));
/** DELETE event */
exports.admin.delete(`${eventsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Events, methods_1.Method.DELETE, "Could not delete event", "Deleted event successfully", req.body._id); }));
// resources
/** POST featured resource */
exports.admin.post(`${resourcesBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Resources, methods_1.Method.POST, "Could not post resource", "Posted resource successfully"); }));
/** GET featured resources */
exports.admin.get(`${resourcesBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Resources, methods_1.Method.GET, "Could not fetch resources", "Fetched resources successfully"); }));
/** PUT featured resource */
exports.admin.put(`${resourcesBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Resources, methods_1.Method.PUT, "Could not update resource", "Updated resource successfully", req.body._id); }));
/** DELETE featured resource */
exports.admin.delete(`${resourcesBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Resources, methods_1.Method.DELETE, "Could not delete resource", "Deleted resource successfully", req.body._id); }));
/** GET resource categories */
exports.admin.get(`${resourcesBase}/categories`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.ResourceCategories, methods_1.Method.GET, "Could not fetch resource categories", "Fetched resource categories successfully"); }));
/** POST resource category */
exports.admin.post(`${resourcesBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.ResourceCategories, methods_1.Method.POST, "Could not post resource category", "Posted resource category successfully"); }));
/** PUT resource category */
exports.admin.put(`${resourcesBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.ResourceCategories, methods_1.Method.PUT, "Could not update resource category", "Updated resource category successfully", req.body._id); }));
/** DELETE resource category */
exports.admin.delete(`${resourcesBase}/category`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.ResourceCategories, methods_1.Method.DELETE, "Could not delete resource category", "Deleted resource category successfully", req.body._id); }));
// news
/** POST featured news */
exports.admin.post(`${newsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.NewsModel, methods_1.Method.POST, "Could not post news", "Posted news successfully"); }));
/** GET featured news */
exports.admin.get(`${newsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.NewsModel, methods_1.Method.GET, "Could not fetch news", "Fetched news successfully"); }));
/** PUT featured news */
exports.admin.put(`${newsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.NewsModel, methods_1.Method.PUT, "Could not update news", "Updated news successfully", req.body._id); }));
/** DELETE featured news */
exports.admin.delete(`${newsBase}`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.NewsModel, methods_1.Method.DELETE, "Could not delete news", "Deleted news successfully", req.body._id); }));
// livewire
// photos
// jobs
// council
/** POST member */
exports.admin.post(`${councilBase}/member`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.POST, "Could not post member", "Posted member successfully"); }));
/** GET executive members */
exports.admin.get(`${councilBase}/members/execs`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.GETBY, "Could not fetch execs", "Fetched execs successfully", { category: "Executive" }); }));
/** GET representatives */
exports.admin.get(`${councilBase}/members/reps`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.GETBY, "Could not fetch reps", "Fetched reps successfully", { category: "Representative" }); }));
/** PUT member */
exports.admin.put(`${councilBase}/member`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.PUT, "Could not update member", "Updated member successfully", req.body._id); }));
/** DELETE member */
exports.admin.delete(`${councilBase}/member`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { yield template_1.handler(req, res, next, models.Members, methods_1.Method.DELETE, "Could not update member", "Updated member successfully", req.body._id); }));
//# sourceMappingURL=admin.js.map