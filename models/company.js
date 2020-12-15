const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cid: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('company', companySchema)