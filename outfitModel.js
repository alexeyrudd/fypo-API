var mongoose = require('mongoose');
// Setup schema
var outfitSchema = mongoose.Schema({
    body_type: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    url_tienda: {
        type: String,
        required: true
    },
    id_usuario: {
        type: String,
        required: true
    }

});
// Export Contact model
var Outfit = module.exports = mongoose.model('outfit', outfitSchema);
module.exports.get = function (callback, limit) {
    Outfit.find(callback).limit(limit);
}