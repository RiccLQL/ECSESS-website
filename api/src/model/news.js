const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
})

module.exports = { newsSchema };