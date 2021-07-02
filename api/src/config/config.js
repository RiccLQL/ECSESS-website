/**
 * @description The configuration variables which will be exported to server.js
 * @author Ricky Liu
 */

require("dotenv").config();

const {
    PORT,
    TESTPORT,
    USERFRONTEND_DOMAIN,
    ADMINFRONTEND_DOMAIN,
    DATABASE_URL,
    EMAILHOST,
    EMAILPORT,
    EMAILUSER,
    EMAILPASS,
    LIVEWIREEMAIL,
    AWSACCESSKEY,
    AWSSECRET,
    MONGODB_NEWS,
    MONGODB_PHOTOS,
    MONGODB_EVENTS,
    MONGODB_RESOURCES,
    MONGODB_JOBS,
    MONGODB_COUNCIL,
} = process.env;

const config = {
    backend: {
        PORT,
        TESTPORT,
        USERFRONTEND_DOMAIN,
        ADMINFRONTEND_DOMAIN
    },
    database: {
        MONGODB_NEWS,
        MONGODB_PHOTOS,
        MONGODB_EVENTS,
        MONGODB_RESOURCES,
        MONGODB_JOBS,
        MONGODB_COUNCIL,
    },
    email: {
        EMAILHOST,
        EMAILPORT,
        EMAILUSER,
        EMAILPASS,
        LIVEWIREEMAIL
    },
    aws: {
        AWSACCESSKEY,
        AWSSECRET
    }
};

module.exports = config;