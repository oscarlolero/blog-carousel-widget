import './App.css'
import {useEffect, useState} from "react";
import NewsCard, {News} from "./components/NewsCard.tsx";
import Carousel from "./components/Carousel.tsx";

interface NewsAPI {
  title: string;
  image: string;
  tags: string[];
  date_published: string;
  url: string;
  author: {
    name: string;
  }
}

function App() {

  const [news, setNews] = useState<typeof NewsCard[]>([]);

  useEffect(() => {
    fetch('https://blog.jonajo.com/feed/json').then((response) => {
      return response.json()
    }).then((data) => {

      setNews(data.items.slice(0,3).map((news: NewsAPI) => {
        return {
          title: news.title,
          image: news.image,
          category: news.tags[0],
          date: news.date_published,
          url: news.url,
          author: news.author.name
        }
      }))
    })
  }, []);

  useEffect(() => {
    if (news) {
      console.log(news[0])
    }
  }, [news]);

  const slides = ['#49b293', '#b03532', '#6a478f', '#da6f2b', '#123456'];
  return (
    <>
      <Carousel slides={slides} />
      {/*<div className={"container"}>*/}
      {/*  {*/}
      {/*    news && news.length > 0 && news.map((newsItem: News, index) => {*/}
      {/*      return (*/}
      {/*        <NewsCard key={index} news={newsItem}/>*/}
      {/*      )*/}
      {/*    })*/}
      {/*  }*/}
      {/*</div>*/}
    </>
  )
}

export default App
