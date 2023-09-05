const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp:meuapp@tg.bhfdt3b.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection