import { Schema } from "mongoose";

export const membersSchema: Schema<CouncilMember> = new Schema<CouncilMember>({
    name: String,
    description: String,
    position: String,
    image: String,
    email: String,
    category: String,
})

export interface CouncilMember {
    name: string,
    description: string,
    position: string,
    image: string,
    email: string,
    category: string,
}