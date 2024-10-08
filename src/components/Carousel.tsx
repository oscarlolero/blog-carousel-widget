import React, {ReactNode, useState} from 'react';
import styles from './Carousel.module.css';
import arrow from '../assets/arrow-right.svg';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';

interface CarouselProps {
  children: ReactNode;
  mode: string | null | undefined;
}

const PreviousButton = ({isDisabled}: { isDisabled: boolean }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.controlButton} ${!isDisabled ? styles.selected : ''}`}
      onClick={() => swiper.slidePrev()}
      disabled={isDisabled}
    >
      <img src={arrow} alt={"Previous arrow icon"} className={styles.inverted}/>
    </button>
  );
}

const NextButton = ({isDisabled}: { isDisabled: boolean }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.controlButton} ${!isDisabled ? styles.selected : ''}`}
      onClick={() => swiper.slideNext()}
      disabled={isDisabled}
    >
      <img src={arrow} alt={"Next arrow icon"}/>
    </button>
  );
}


const Carousel: React.FC<CarouselProps> = ({children, mode}) => {
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  return (
    <>
      <section className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          slidesPerGroup={1}
          breakpoints={{
            940: {
              slidesPerView: 3,
            },
            728: {
              slidesPerView: 2,
            },
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
            <div className={mode === 'testimonials' ? styles.controls : ''}>
              <PreviousButton isDisabled={isAtBeginning}/>
              <NextButton isDisabled={isAtEnd}/>
            </div>
            {
              mode === 'blog' &&
              <a
                className={styles.visitBlog}
                href="https://blog.jonajo.com"
                target="_top"
                rel="noopener noreferrer"
              >
                  <div className={styles.desktopButtonText}>Visit Our Blog</div>
                  <div className={styles.mobileButtonText}>See All</div>
                  <img src={arrow} alt={"Blog arrow icon"}/>
              </a>
            }
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
