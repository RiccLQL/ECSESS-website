export interface NewsModel {
    _id: string,
    title: string,
    image: string,
    description: string,
    link: string,
}

export interface EventModel {
    _id: string,
    title: string,
    description: string,
    date: Date,
    image: string,
    link: string,
    category: string,
}

export interface MemberModel {
    _id: string,
    name: string,
    position: string,
    description: string,
    image: string,
    email: string,
}

export interface EventCategoryModel {
    _id: string,
    name: string,
}

export interface NewsModel {
    _id: string,
    title: string,
    image: string,
    description: string,
    link: string,
}

export interface ResourceModel {
    _id: string,
    title: string,
    image: string,
    description: string,
    link: string,
    category: string,
}

export interface ResourceCategoryModel {
    _id: string,
    name: string,
}