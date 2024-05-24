import './App.css'
import {useEffect, useState} from "react";

type New = {
  title: string
  link: string
}

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://blog.jonajo.com/feed/json').then((response) => {
      return response.json()
    }).then((data) => {
      setNews(data.items)
    })
  }, []);

  useEffect(() => {
    if (news) {
      console.log(news)
    }
  }, [news]);

  return (
    <>
      {
        news && news.map((item: New, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
