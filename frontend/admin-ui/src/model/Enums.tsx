import { EventModel, MemberModel, NewsModel } from "./modelInterfaces";

export type Model = {
    News?: NewsModel,
    Events?: EventModel,
    Member?: MemberModel,
}