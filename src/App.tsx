import './App.css';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import NewsCard, {News} from './components/NewsCard';
import Carousel from "./components/Carousel.tsx";
import {useSearchParams} from "react-router-dom";
import ClientCard, {Client} from "./components/ClientCard.tsx";

function App() {
  const [news, setNews] = useState<News[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const [searchParams] = useSearchParams();
  const carouselMode = searchParams.get('carouselMode');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const APIUrl = import.meta.env.MODE === 'development' ? 'http://localhost:8080/testimonials' : 'https://jonajo-testimonials-api-nfyf3ncyaq-uc.a.run.app/testimonials';
        const response = await fetch(APIUrl);
        let clients = await response.json() as Client[];
        clients = clients.filter((client) => !client.hidden);
        clients = clients.sort((a, b) => a.order - b.order);

        setClients(clients);
      } catch (err) {
        console.error("Error fetching collection items:", err);
      }
    };

    const fetchNews = async () => {
      try {

        const response = await fetch('https://blog.jonajo.com/feed/json');
        const news = await response.json();

        const processedNews = news.items.map((news: any) => {
          return {
            title: news.title,
            image: news.image,
            category: news.tags[0],
            date: dayjs(news.date_published).format('MMM D, YYYY'),
            url: news.url,
            author: news.author.name,
            selected: false
          }
        }) as News[]
        processedNews[0].selected = true;
        setNews(processedNews);
      } catch (err) {
        console.error("Error fetching collection items:", err);
      }
    }

    if (carouselMode && carouselMode === 'blog') {
      fetchNews();
    } else if (carouselMode && carouselMode === 'testimonials') {
      fetchClients();
    }

  }, [carouselMode]);

  return (
    <>
      <Carousel mode={carouselMode}>
        {news && news.map((newsItem: News, index) => {
          return (
            <NewsCard key={index} news={newsItem} />
          )
        })}
        {clients && clients.map((client: Client, index) => {
          return (
            <ClientCard client={client} key={index}/>
          )
        })}
      </Carousel>
    </>
  );
}

export default App;
