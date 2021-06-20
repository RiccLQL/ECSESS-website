const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
})

module.exports = { photosSchema };