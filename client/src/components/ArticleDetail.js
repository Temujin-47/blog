// src/pages/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articleService from '../services/articleService';

function ArticleDetail() {
    const { id } = useParams(); // Get the article ID from the URL
    const [article, setArticle] = useState(null);

    useEffect(() => {
        articleService.getArticleById(id).then((res) => setArticle(res.data));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            {article.image && <img src={article.image} alt={article.title} />}
            <p>{article.content}</p>
        </div>
    );
}

export default ArticleDetail;
