"use strict";
/**
 * @description Entry file for backend.
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
/**
 * IMPORTS
 */
// important imports
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const api_1 = require("./api/api");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * MIDDLEWARE
         */
        const app = express_1.default();
        app.use(express_1.default.json());
        // CORS
        app.use(cors_1.default({
            origin: config_1.config.backend.USERFRONTEND_DOMAIN,
            methods: "GET,PUT,POST,DELETE",
        }));
        // API ROUTES
        app.use("/api", api_1.router);
        // CONNECT TO STATIC FRONTEND BUILD
        // const FRONTENDPATH = "../../../frontend/ecsess-website/build";
        // app.use(express.static(FRONTENDPATH));
        // GET STATIC FRONTEND ON BASE API CALL
        app.get("/", (req, res) => {
            res.send("Hi!");
        });
        // START SERVER FOR API
        // const server = http.createServer(app);
        const PORT = process.env.PORT || config_1.config.backend.TESTPORT; // change this for different builds
        const server = http_1.default.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is currently running on port ${PORT}`);
        });
    });
}
startServer();
//# sourceMappingURL=server.js.map