"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.photosSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
});
//# sourceMappingURL=photos.js.map