const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    wish: String
});

module.exports = mongoose.model('Wishes' , wishSchema);