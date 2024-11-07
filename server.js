const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/articles');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/articles', articleRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
