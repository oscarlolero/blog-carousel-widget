import './App.css';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import NewsCard, {News} from './components/NewsCard';
import Carousel from "./components/Carousel.tsx";
import {useSearchParams} from "react-router-dom";
import {WebflowClient} from "webflow-api";
import ClientCard, {Client} from "./components/ClientCard.tsx";

function App() {
  const [news, setNews] = useState<News[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const [searchParams] = useSearchParams();
  const carouselMode = searchParams.get('carouselMode');
  const webflow = new WebflowClient({accessToken: import.meta.env.VITE_WEBFLOW_API_KEY});

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const CLIENTS_COLLECTION_ID = '65f88f0b3358f1ed752f57b2';
        const clients = await webflow.collections.items.listItems(CLIENTS_COLLECTION_ID) as any;

        let processedClients = clients.items.map((client: any) => {
          console.log(client)
          return {
            client_name: client.fieldData['contact-person'],
            company_name: client.fieldData['name'],
            url: client.fieldData['company-link'],
            image: client.fieldData.image.url,
            client_message: client.fieldData['client-message'],
            order: client.fieldData['sort-order'],
            hidden: client.fieldData.hidden,
            background_color: client.fieldData['color'],
            position: client.fieldData['contact-position']
          };
        }) as Client[];

        processedClients = processedClients.filter((client) => !client.hidden);
        processedClients = processedClients.sort((a, b) => a.order - b.order);

        setClients(processedClients);

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
        }) as News[];

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
      <Carousel>
        {news && news.map((news: News, index) => {
          return (
            <NewsCard key={index} news={news} onTap={() => {
              console.log('DO NOTHING')
            }}/>
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
