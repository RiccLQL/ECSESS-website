import { Schema } from "mongoose";

export const resourcesSchema: Schema<Resource> = new Schema<Resource>({
    title: String,
    description: String,
    image: String,
    link: String,
    category: {type: String, ref: 'resourceCategories'},
})

export interface Resource {
    title: string,
    description: string,
    image: string,
    link: string,
    category: string,
}

export const resourceCategoriesSchema: Schema<ResourceCategory> = new Schema<ResourceCategory>({
    name: String,
})

export interface ResourceCategory {
    name: string,
}