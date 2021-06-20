const mongoose = require("mongoose");

const resourcesSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
})

module.exports = { resourcesSchema };