import './App.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import NewsCard, { News } from './components/NewsCard';
import Carousel from './components/Carousel';

interface NewsAPI {
  title: string;
  image: string;
  tags: string[];
  date_published: string;
  url: string;
  author: {
    name: string;
  };
}

function App() {
  const [news, setNews] = useState<News[][]>([]);

  useEffect(() => {
    fetch('https://blog.jonajo.com/feed/json')
      .then((response) => response.json())
      .then((data) => {
        const processedNews = data.items.map((news: NewsAPI) => {
          return {
            title: news.title,
            image: news.image,
            category: news.tags[0],
            date: dayjs(news.date_published).format('MMM D, YYYY'),
            url: news.url,
            author: news.author.name,
          };
        });
        setNews(chunkArray(processedNews, 3));
      });
  }, []);

  function chunkArray(array: News[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }

  return (
    <>
      <Carousel>
        {news && news.length > 0 &&
          news.map((newsChunk: News[], index) => {
            return (
              <div className="slide" key={index}>
                {newsChunk.map((news: News, index) => {
                  return <NewsCard key={index} news={news} />;
                })}
              </div>
            );
          })}
      </Carousel>
    </>
  );
}

export default App;
