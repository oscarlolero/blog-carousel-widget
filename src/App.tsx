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

  const [news, setNews] = useState<typeof NewsCard[][]>([]);

  useEffect(() => {
    fetch('https://blog.jonajo.com/feed/json').then((response) => {
      return response.json()
    }).then((data) => {
      const processedNews = data.items.map((news: NewsAPI) => {
        return {
          title: news.title,
          image: news.image,
          category: news.tags[0],
          date: news.date_published,
          url: news.url,
          author: news.author.name
        }
      })
      setNews(chunkArray(processedNews, 3))
    })
  }, []);

  // useEffect(() => {
  //   if (news) {
  //     console.log(news[0])
  //   }
  // }, [news]);

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
        {
          news && news.length > 0 && news.map((newsChunk: News[], index) => {
            return (
              <div className={"container"} key={index}>
                {
                  newsChunk.map((news: News, index) => {
                    return <NewsCard key={index} news={news}/>
                  })
                }
              </div>
            )
          })
        }
      </Carousel>
    </>
  )
}

export default App
