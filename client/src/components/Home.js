import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import articleService from '../services/articleService';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getArticles().then((res) => setArticles(res.data));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <Link key={article._id} to={`/articles/${article._id}`}>
                    <div className="article-preview">
                        <img src={article.image} alt={article.title} />
                        <h2>{article.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Home;
