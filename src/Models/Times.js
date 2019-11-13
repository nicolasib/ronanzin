const mongoose = require('../Database/index')

const TimeSchema = new mongoose.Schema({
    nomeTime: {
        type: String,
        require: true
    },
    elenco: [
        {
            nome: {
                type: String,
                require: true
            },
            numeroCamisa: {
                type: String,
                require: true
            }
        }
    ]
})

const Times = mongoose.model('Times', TimeSchema)

module.exports = Times