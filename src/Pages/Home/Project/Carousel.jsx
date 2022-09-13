import React from 'react';
import { Autoplay,Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Img } from '@chakra-ui/react';
const Carousel = ({data}) => {
    return (
        <Swiper 
        autoplay={true} 
        pagination={true} 
        modules={[Autoplay,Pagination]} 
        className='mySwiper'>
        <SwiperSlide><Img src={data.image1} /></SwiperSlide>
        <SwiperSlide><Img src={data.image2} /></SwiperSlide>
        <SwiperSlide><Img src={data.image3} /></SwiperSlide>
        <SwiperSlide><Img src={data.image4} /></SwiperSlide>
        
      </Swiper>
      );
};

export default Carousel;