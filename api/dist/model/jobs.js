"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.jobsSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
});
//# sourceMappingURL=jobs.js.map