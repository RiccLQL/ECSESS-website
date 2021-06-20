/**
 * @description Entry file for backend. 
 * @author Ricky Liu
 */

/**
 * IMPORTS
 */

//important imports
const express = require("express");
const http = require("http");
const cors = require("cors");
const config = require("./config/config");
const router = require("./api/api");

async function startServer() {

    /**
     * MIDDLEWARE
     */

    const app = express();
    app.use(express.json());

    //CORS
    app.use(
        cors({
            origin: config.backend.USERFRONTEND_DOMAIN,
            "Access-Control-Allow-Origin": config.backend.USERFRONTEND_DOMAIN,
            methods: "GET,PUT,POST,DELETE",
        })
    );

    //API ROUTES

    app.use("/api", router);

    //CONNECT TO STATIC FRONTEND BUILD
    //const FRONTENDPATH = "../../../frontend/ecsess-website/build";
    //app.use(express.static(FRONTENDPATH));

    //GET STATIC FRONTEND ON BASE API CALL
    app.get("/", (req, res) => {
        res.send("Hi!");
    });

    //START SERVER FOR API
    //const server = http.createServer(app);
    const PORT = process.env.PORT || config.backend.TESTPORT; //change this for different builds
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server is currently running on port ${PORT}`);
    })
}

startServer();