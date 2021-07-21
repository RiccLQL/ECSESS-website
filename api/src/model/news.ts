import { Schema } from "mongoose";

export const newsSchema: Schema<News> = new Schema<News>({
    title: String,
    description: String,
    image: String,
    link: String,
})

export interface News {
    title: string,
    description: string,
    image: string,
    link: string,
}