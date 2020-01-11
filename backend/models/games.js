const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema ({
    games: {
        type: String,
        required: true
    }
})

module.exports =  GamesModel = mongoose.model('Games', GamesSchema)
