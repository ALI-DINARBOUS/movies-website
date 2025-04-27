const mongoose = require('mongoose') ;

const movieSchema = mongoose.Schema({

    // NB : le champ _id est automatiquement créé

    title: { type: String, required: true },
    synopsis: { type: String, default: "No synopsis available yet !" },
    image: { type: String }
}) ;


module.exports = mongoose.model('Movie', movieSchema) ;

