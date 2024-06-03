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
  selected: boolean;
}

function useResponsiveChunks() {
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 585) {
        setChunkSize(1);
      } else if (window.innerWidth < 880) {
        setChunkSize(2);
      } else {
        setChunkSize(3);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return chunkSize;
}

function App() {
  const [news, setNews] = useState<News[][]>([]);
  const chunkSize = useResponsiveChunks();

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
            selected: false
          };
        });

        const chunkedNews = chunkArray(processedNews, chunkSize);

        // Set the first news as selected
        // @ts-expect-error TODO: FIX THIS
        chunkedNews[0][0].selected = true;
        setNews(chunkedNews);
      });
  }, [chunkSize]);

  function chunkArray(array: [], chunkSize: number) {
    const result = [];
    const totalChunks = Math.floor(array.length / chunkSize);

    for (let i = 0; i < totalChunks * chunkSize; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }

    return result;
  }

  function selectedCardNews(chunkIndex: number, newsIndex: number) {
    const updatedNews = news.map((newsChunk: News[], ci) => {
      return newsChunk.map((news: News, ni) => {
        return { ...news, selected: ci === chunkIndex && ni === newsIndex };
      });
    });

    setNews(updatedNews);
  }

  return (
    <>
      <Carousel>
        {news && news.length > 0 &&
          news.map((newsChunk: News[], chunkNewsIndex) => {
            return (
              <div className="slide" key={chunkNewsIndex}>
                {newsChunk.map((news: News, newsIndex) => {
                  return <NewsCard key={newsIndex} news={news} onTap={() => selectedCardNews(chunkNewsIndex, newsIndex) } />;
                })}
              </div>
            );
          })}
      </Carousel>
    </>
  );
}

export default App;
