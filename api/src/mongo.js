const { createConnection } = require("mongoose");
const config = require("./config/config");
const { eventsSchema, eventCategoriesSchema } = require ("./model/events");
const { newsSchema } = require("./model/news");
const { execsSchema, repsSchema } = require("./model/council");

const createConnections = async function() {
    const eventsDB = await createConnection(config.database.MONGODB_EVENTS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Events = await eventsDB.model("events", eventsSchema);
    const EventCategories = await eventsDB.model("eventCategories", eventCategoriesSchema);

    const newsDB = await createConnection(config.database.MONGODB_NEWS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const News = await newsDB.model("news", newsSchema);

    const councilDB = await createConnection(config.database.MONGODB_COUNCIL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    const Execs = await councilDB.model("execs", execsSchema);
    const Reps = await councilDB.model("reps", repsSchema);

    const resourcesDB = await createConnection(config.database.MONGODB_RESOURCES, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const jobsDB = await createConnection(config.database.MONGODB_JOBS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const photosDB = await createConnection(config.database.MONGODB_PHOTOS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    return { Events, EventCategories, News, Execs, Reps };
}

module.exports = { createConnections };

// const eventsDB = async () => {
//     await mongoose.connect(config.database.MONGODB_EVENTS, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     return mongoose;
// }

// const newsDB = async () => {
//     await mongoose.connect(config.database.MONGODB_NEWS, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     return mongoose;
// }

// const resourcesDB = async () => {
//     await mongoose.connect(config.database.MONGODB_RESOURCES, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     return mongoose;
// }

// const photosDB = async () => {
//     await mongoose.connect(config.database.MONGODB_PHOTOS, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     return mongoose;
// }

// const jobsDB = async () => {
//     await mongoose.connect(config.database.MONGODB_JOBS, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     return mongoose;
// }

// module.exports = { eventsDB, resourcesDB, newsDB, jobsDB, photosDB };