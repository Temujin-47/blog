const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get article by ID
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new article
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    });

    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
