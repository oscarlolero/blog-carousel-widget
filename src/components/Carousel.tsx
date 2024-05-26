import React, { useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const slidesContainerRef = useRef<HTMLUListElement>(null);

  const handleNextClick = () => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.firstElementChild?.clientWidth || 0;
      slidesContainerRef.current.scrollLeft += slideWidth;
    }
  };

  const handlePrevClick = () => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.firstElementChild?.clientWidth || 0;
      slidesContainerRef.current.scrollLeft -= slideWidth;
    }
  };

  return (
    <>
      <section className={styles.sliderWrapper}>
        <ul className={styles.slidesContainer} ref={slidesContainerRef}>
          {slides.map((slide, index) => (
            <li key={index} className={styles.slide} style={{ backgroundColor: slide }}></li>
          ))}
        </ul>
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={handlePrevClick}>Prev</button>
          <button className={styles.controlButton} onClick={handleNextClick}>Next</button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
