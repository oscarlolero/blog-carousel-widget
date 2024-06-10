import './App.css';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import NewsCard, {News} from './components/NewsCard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import Carousel from "./components/Carousel.tsx";

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



function App() {
  const [news, setNews] = useState<News[]>([]);

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
        setNews(processedNews)
      });
  }, []);

  return (
    <>
      <Carousel>
        {news && news.map((news: News, index) => {
          return (
            <NewsCard key={index} news={news} onTap={() => {console.log('DO NOTHING')}}/>
          )
        })}
      </Carousel>

    </>
  );
}

export default App;
