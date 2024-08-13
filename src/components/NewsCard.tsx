import styles from './News.module.css';
import userImage from '../assets/user-icon.jpg';

export interface News {
  title: string;
  category: string;
  date: string;
  url: string;
  author: string;
  image: string;
  selected: boolean;
}

interface NewsProps {
  news: News;
}

export default function NewsCard({news}: NewsProps) {

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className={`${styles.card}`} onClick={() => {
      // @ts-expect-error Since it's an iframe we need to use window top
      window.top.location.href = news.url;
    }}>
      <img className={styles.card__cover} src={news.image} alt={"NewsCard cover photo"}/>
      <div className={styles.card__content}>
        <div className={styles.card__description}>
          <div className={styles.card__category}>
            { capitalizeFirstLetter(news.category) }
          </div>
          <div className={styles.card__date}>
            { news.date }
          </div>
        </div>
        <div className={styles.card__title}>
          { news.title }
        </div>
        <div className={styles.card__author}>
          <img className={styles.card__author__photo} src={userImage} alt="Types author's image"/>
          <div className={styles.card__author__name}>{ news.author }</div>
        </div>
      </div>
    </div>
  )
}
