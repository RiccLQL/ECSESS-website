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

export {
    NewsModel,
    EventModel,
}