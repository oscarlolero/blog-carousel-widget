import React, { ReactNode, useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
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
          {React.Children.map(children, (child, index) => (
            <li key={index} className={styles.slide}>
              {child}
            </li>
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
