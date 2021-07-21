"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnections = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("./config/config");
const events_1 = require("./model/events");
const news_1 = require("./model/news");
const council_1 = require("./model/council");
const resources_1 = require("./model/resources");
const createConnections = () => __awaiter(void 0, void 0, void 0, function* () {
    const eventsDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_EVENTS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Events = yield eventsDB.model("events", events_1.eventsSchema);
    const EventCategories = yield eventsDB.model("eventCategories", events_1.eventCategoriesSchema);
    const newsDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_NEWS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const NewsModel = yield newsDB.model("news", news_1.newsSchema);
    const councilDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_COUNCIL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Members = yield councilDB.model("members", council_1.membersSchema);
    const resourcesDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_RESOURCES, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Resources = yield resourcesDB.model("resources", resources_1.resourcesSchema);
    const ResourceCategories = yield resourcesDB.model("resourceCategories", resources_1.resourceCategoriesSchema);
    const jobsDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_JOBS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const photosDB = yield mongoose_1.createConnection(config_1.config.database.MONGODB_PHOTOS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    return { Events, EventCategories, NewsModel, Members, Resources, ResourceCategories };
});
exports.createConnections = createConnections;
//# sourceMappingURL=mongo.js.map