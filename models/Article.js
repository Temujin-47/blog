const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);