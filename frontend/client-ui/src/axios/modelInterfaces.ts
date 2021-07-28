interface NewsModel {
    title: string,
    image: string,
    description: string,
    link: string,
}

interface EventModel {
    title: string,
    description: string,
    date: Date,
    image: string,
    link: string,
    category: string,
}

interface MemberModel {
    name: string,
    position: string,
    description: string,
    image: string,
    email: string,
}

interface ResourceModel {
    title: string,
    description: string,
    image: string,
    link: string,
    category: string,
}

export {
    NewsModel,
    EventModel,
    MemberModel,
    ResourceModel,
}