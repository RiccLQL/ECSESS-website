"use strict";
/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
// admin routers
exports.router = express_1.default.Router();
const admin_1 = require("./admin");
const user_1 = require("./user");
exports.router.use("/admin", admin_1.admin);
exports.router.use("/user", user_1.user);
//# sourceMappingURL=api.js.map