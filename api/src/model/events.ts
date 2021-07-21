import { Schema } from "mongoose";

export const eventsSchema: Schema<Event> = new Schema<Event>({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
    category: {type: String, ref: 'eventCategories'},
})

export interface Event {
    title: string,
    description: string,
    date: Date,
    image: string,
    link: string,
    category: string,
}

export const eventCategoriesSchema: Schema<EventCategory> = new Schema<EventCategory>({
    name: String,
})

export interface EventCategory {
    name: string,
}