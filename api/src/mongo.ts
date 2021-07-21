import { Connection, createConnection, Model } from "mongoose";
import { config } from './config/config';
import { CouncilMember } from "./model/council";
import { Event, EventCategory } from "./model/events";
import { Job } from "./model/jobs";
import { News } from "./model/news";
import { Photo } from "./model/photos";
import { Resource, ResourceCategory } from "./model/resources";
import { eventsSchema, eventCategoriesSchema } from "./model/events";
import { newsSchema } from "./model/news";
import { membersSchema } from "./model/council";
import { resourcesSchema, resourceCategoriesSchema } from "./model/resources";

export const createConnections = async (): Promise<Models> => {
    const eventsDB = await createConnection(config.database.MONGODB_EVENTS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Events = await eventsDB.model<Event>("events", eventsSchema);
    const EventCategories = await eventsDB.model<EventCategory>("eventCategories", eventCategoriesSchema);

    const newsDB = await createConnection(config.database.MONGODB_NEWS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const NewsModel = await newsDB.model<News>("news", newsSchema);

    const councilDB = await createConnection(config.database.MONGODB_COUNCIL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    const Members = await councilDB.model<CouncilMember>("members", membersSchema);

    const resourcesDB = await createConnection(config.database.MONGODB_RESOURCES, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const Resources = await resourcesDB.model<Resource>("resources", resourcesSchema);
    const ResourceCategories = await resourcesDB.model<ResourceCategory>("resourceCategories", resourceCategoriesSchema);

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

    return { Events, EventCategories, NewsModel, Members, Resources, ResourceCategories };
}


export type ModelType =
    | Model<Event>
    | Model<EventCategory>
    | Model<News>
    | Model<CouncilMember>
    | Model<Resource>
    | Model<ResourceCategory>
    | Model<Job>
    | Model<Photo>;


export interface Models {
    Events: Model<Event>,
    EventCategories: Model<EventCategory>,
    NewsModel: Model<News>,
    Members: Model<CouncilMember>,
    Resources: Model<Resource>,
    ResourceCategories: Model<ResourceCategory>,
}