const mongoose = require("mongoose");

const execsSchema = new mongoose.Schema({
    name: String,
    description: String,
    position: String,
    image: String,
    email: String,
})

const repsSchema = new mongoose.Schema({
    name: String,
    description: String,
    position: String,
    image: String,
    email: String,
})

module.exports = { execsSchema, repsSchema };