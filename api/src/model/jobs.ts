import { Schema } from "mongoose";

export const jobsSchema: Schema<Job> = new Schema<Job>({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
})
export interface Job {
    title: string,
    description: string,
    date: Date,
    image: string,
    link: string,
}