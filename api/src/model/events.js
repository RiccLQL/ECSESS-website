const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
    category: {type: String, ref: 'eventCategories'},
})

const eventCategoriesSchema = new mongoose.Schema({
    name: String,
})

module.exports = { eventsSchema, eventCategoriesSchema };