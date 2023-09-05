const mongoose = require('mongoose')

const PropertiesDataSchema = new mongoose.Schema({
    type: String,
    title: String,
    description: String
})

module.exports = mongoose.model('Properties', PropertiesDataSchema)