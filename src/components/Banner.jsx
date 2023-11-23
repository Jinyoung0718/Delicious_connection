import React, { useState} from 'react';
import banner_1 from '../assets/banner_1.jpg';
import banner_2 from '../assets/banner_2.jpg';
import banner_3 from '../assets/banner_3.jpg';
import "./Banner.css";
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner(props) {
  const {
    handleSlideClick
  }= props;
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation={{}}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      speed={5000} 
      effect="slide" 
    >
      <SwiperSlide onClick={() => handleSlideClick('E9-2laAbjug')}>
        <SlideImage src={banner_1} alt="초밥 이미지 배너" />
      </SwiperSlide>
      <SwiperSlide onClick={() => handleSlideClick('kVn-rEWL3Hk')}>
        <SlideImage src={banner_2} alt="연어샐러드 광고 배너" />
      </SwiperSlide>
      <SwiperSlide onClick={() => handleSlideClick('Ezfwypj7RVE')}>
        <SlideImage src={banner_3} alt="새우 튀김 이미지 배너" />
      </SwiperSlide>
    </Swiper>
  </>
  );
}

const SlideImage = styled.img`
  width: 1980px;
  height: 700px;
  object-fit: cover;
`;
