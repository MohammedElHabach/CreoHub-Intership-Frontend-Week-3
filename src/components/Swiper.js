// Swiper.js
import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={40}
    //   loop={false}
    // scrollbar
    // navigation
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children} 
    </Swiper>
  );
};

export default MySwiper;
