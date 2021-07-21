"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersSchema = void 0;
const mongoose_1 = require("mongoose");
exports.membersSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    position: String,
    image: String,
    email: String,
    category: String,
});
//# sourceMappingURL=council.js.map