import React, { useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Introduce from '../components/Introduce'
import RankingRow from '../components/RankingRow';
import VegetarianRow from '../components/VegetarianRow';
import GlutenFreeRow from '../components/GlutenFreeRow';
import YoutubeModal from '../components/modals/YoutubeModal'
import Footer from '../components/Footer';

export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState('');

  const handleSlideClick = (videoId) => {
    setModalVisible(true);
    setYoutubeVideoId(videoId);
  };

  const handleCloseButtonClick = () => {
    setModalVisible(false);
    setYoutubeVideoId('');
  };

  return (
    <header>
         <Nav />
        <Banner handleSlideClick={handleSlideClick}/> 
        <Introduce />
        <RankingRow />
        <VegetarianRow />
        <GlutenFreeRow />
        {modalVisible && (
          <YoutubeModal videoId = {youtubeVideoId} closeFunc={handleCloseButtonClick}/> // 프로퍼티 넘겨 줌, (비디오 주소, 이미지, x버튼 시 close 기능)
          ) }
    </header>
  );
}

// <Banner handleSlideClick={handleSlideClick}/> 에서 넘겨진 함수는 Banner에서 프로퍼티를 받아 함수 사용시 부모요소인 현 페이지 스테이트 값을 변경함