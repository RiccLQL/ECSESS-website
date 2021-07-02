const mongoose = require("mongoose");

const resourcesSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    category: {type: String, ref: 'resourceCategories'},
})

const resourceCategoriesSchema = new mongoose.Schema({
    name: String,
})

module.exports = { resourcesSchema, resourceCategoriesSchema };