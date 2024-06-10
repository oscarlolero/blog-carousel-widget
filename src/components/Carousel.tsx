import React, {ReactNode, useState} from 'react';
import styles from './Carousel.module.css';
import arrow from '../assets/arrow-right.svg';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

interface CarouselProps {
  children: ReactNode;
}

const PreviousButton = ({ isDisabled }: { isDisabled: boolean }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.controlButton} ${!isDisabled ? styles.selected : ''}`}
      onClick={() => swiper.slidePrev()}
      disabled={isDisabled}
    >
      <img src={arrow} alt={"Previous arrow icon"} className={styles.inverted} />
    </button>
  );
}

const NextButton = ({ isDisabled }: { isDisabled: boolean }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.controlButton} ${!isDisabled ? styles.selected : ''}`}
      onClick={() => swiper.slideNext()}
      disabled={isDisabled}
    >
      <img src={arrow} alt={"Next arrow icon"} />
    </button>
  );
}


const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  return (
    <>
      <section className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={1}
          breakpoints={{
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 3,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 2,
            },
            // default (mobile)
            0: {
              slidesPerView: 1,
            },
          }}
          onInit={() => {
            setIsAtBeginning(true);
            setIsAtEnd(false);
          }}
          onSlideChange={(swiper) => {
            setIsAtBeginning(swiper.isBeginning);
            setIsAtEnd(swiper.isEnd);
          }}
          onReachEnd={() => setIsAtEnd(true)}
          onReachBeginning={() => setIsAtBeginning(true)}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>
              <li className={styles.slide}>
                {child}
              </li>
            </SwiperSlide>
          ))}
          <div className={styles.bottomContainer}>
            <div className={styles.controls}>
              <PreviousButton isDisabled={isAtBeginning} />
              <NextButton isDisabled={isAtEnd} />
            </div>
            <button
              className={styles.visitBlog}
              onClick={() => window.open('https://blog.jonajo.com', '_blank')}
            >
              <div className={styles.visitOurBlogText}>Visit Our Blog</div>
              <div className={styles.seeAllText}>See All</div>
              <img src={arrow} alt={"Blog arrow icon"} />
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
