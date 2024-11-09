// src/pages/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/articles/${id}`)
            .then((res) => setArticle(res.data))
            .catch((err) => console.error("Failed to fetch article:", err));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}

export default ArticleDetail;
