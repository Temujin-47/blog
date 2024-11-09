// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const articleRoutes = require('./routes/articles');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.log(err));

// app.use(cors());
// app.use(express.json());
// app.use('/articles', articleRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Article = require('./models/Article');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("Connected to MongoDB");

    // Insert sample articles if they don't already exist
    const articlesCount = await Article.countDocuments();
    if (articlesCount === 0) {
        await Article.insertMany([
            {
                title: "Sample Article 1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            },
            {
                title: "Sample Article 2",
                content: "Vestibulum ac diam sit amet quam vehicula elementum...",
            },
            {
                title: "Sample Article 3",
                content: "Curabitur non nulla sit amet nisl tempus convallis...",
            },
        ]);
        console.log("Sample articles added to the database.");
    }
}).catch((err) => console.error("Error connecting to MongoDB:", err));

// Route to get all articles
app.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get a single article by ID
app.get('/articles/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article) res.json(article);
        else res.status(404).json({ message: "Article not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
