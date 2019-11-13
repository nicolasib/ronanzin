const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0-h9ulf.mongodb.net/minasfut?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

module.exports = mongoose