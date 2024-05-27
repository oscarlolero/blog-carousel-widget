import React, { ReactNode, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import arrow from '../assets/arrow-right.svg';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const slidesContainerRef = useRef<HTMLUListElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = React.Children.count(children);

  const handleNextClick = () => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.firstElementChild?.clientWidth || 0;
      slidesContainerRef.current.scrollLeft += slideWidth;
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }
  };

  const handlePrevClick = () => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.firstElementChild?.clientWidth || 0;
      slidesContainerRef.current.scrollLeft -= slideWidth;
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  return (
    <>
      <section className={styles.sliderWrapper}>
        <ul className={styles.slidesContainer} ref={slidesContainerRef}>
          {React.Children.map(children, (child, index) => (
            <li key={index} className={styles.slide}>
              {child}
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <button
            className={`${styles.controlButton} ${currentPage > 1 ? styles.selected : ''}`}
            onClick={handlePrevClick}
          >
            <img src={arrow} alt={"Previous arrow icon"} className={styles.inverted} />
          </button>
          <button
            className={`${styles.controlButton} ${currentPage < totalPages ? styles.selected : ''}`}
            onClick={handleNextClick}
          >
            <img src={arrow} alt={"Next arrow icon"} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
