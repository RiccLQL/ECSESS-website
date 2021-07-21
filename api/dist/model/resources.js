"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceCategoriesSchema = exports.resourcesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.resourcesSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    category: { type: String, ref: 'resourceCategories' },
});
exports.resourceCategoriesSchema = new mongoose_1.Schema({
    name: String,
});
//# sourceMappingURL=resources.js.map