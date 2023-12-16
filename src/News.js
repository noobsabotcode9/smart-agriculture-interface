// news.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual News API key
    
    const apiKey = '890d7c18e2234398a4d0d25b0fc28bbe';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <div className="news-item">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
