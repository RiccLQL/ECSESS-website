const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
    name: String,
    description: String,
    position: String,
    image: String,
    email: String,
    category: String,
})

module.exports = { membersSchema };