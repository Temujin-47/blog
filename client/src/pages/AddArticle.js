// src/pages/AddArticle.js
import React, { useState } from 'react';
import axios from 'axios';

function AddArticle() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/articles', { title, content });
            setMessage('Article added successfully!');
            setTitle('');
            setContent('');
        } catch (error) {
            setMessage('Failed to add article');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add New Article</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Add Article</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddArticle;
