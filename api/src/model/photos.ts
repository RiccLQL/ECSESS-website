import { Schema } from "mongoose";

export const photosSchema: Schema<Photo> = new Schema<Photo>({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
})

export interface Photo {
    title: string,
    description: string,
    date: Date,
    image: string,
    link: string,
}