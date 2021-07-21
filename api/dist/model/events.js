"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventCategoriesSchema = exports.eventsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.eventsSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
    category: { type: String, ref: 'eventCategories' },
});
exports.eventCategoriesSchema = new mongoose_1.Schema({
    name: String,
});
//# sourceMappingURL=events.js.map