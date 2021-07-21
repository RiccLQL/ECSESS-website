"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.newsSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
});
//# sourceMappingURL=news.js.map