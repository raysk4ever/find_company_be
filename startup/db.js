const mongoose = require('mongoose')

module.exports = () => {
    const url = 'mongodb://localhost:27017/marquee', options = { useUnifiedTopology: true, useNewUrlParser: true }
    mongoose.connect(url, options)
        .then(() => console.log('Connected to mongodb'))
        .catch(err => console.log(`MongoError: ${err.message}`))
}