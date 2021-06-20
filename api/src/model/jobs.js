const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    image: String,
    link: String,
})

module.exports = { jobsSchema };