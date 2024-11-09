// src/services/articleService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/articles';

const getArticles = () => axios.get(API_URL);
const getArticleById = (id) => axios.get(`${API_URL}/${id}`);

export default { getArticles, getArticleById };
