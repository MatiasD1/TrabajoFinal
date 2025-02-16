import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import images
import Aldrey from "../../img/Aldrey.png";
import parqueSanMartin from "../../img/parqueSanMartin.jpg";
import centroPuerto from "../../img/centroPuerto.jpg";
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg";
import playaChica from "../../img/playaChica.jpg";
import playaGrande from "../../img/playaGrande.jpg";
import villaVictoria from "../../img/villaVictoria.jpg";
import torreAgua from "../../img/torreDelAgua.jpg";
import centroGuemes from "../../img/centroGuemes.jpg";
import playaVarese from "../../img/playaVarese.jpg";

const SwiperComponent = () => {
  return (
    <div className="swiper-container1">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide><img src={Aldrey} alt="Paseo Aldrey" /><p className='textoSlides'>Paseo Aldrey 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={parqueSanMartin} alt="Parque San Martín" /><p className='textoSlides'>Parque San Martín 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={centroPuerto} alt="Centro Gastronómico del Puerto" /><p className='textoSlides'>Centro Gastronómico del Puerto 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={balnearioPuntaMogotes} alt="Balnearios de Punta Mogotes" /><p className='textoSlides'>Balnearios de Punta Mogotes 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={playaChica} alt="Playa Chica" /><p className='textoSlides'>Playa Chica 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={playaGrande} alt="Playa Grande" /><p className='textoSlides'>Playa Grande 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={villaVictoria} alt="Villa Victoria" /><p className='textoSlides'>Villa Victoria 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={torreAgua} alt="Torre del Agua" /><p className='textoSlides'>Torre del Agua 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={centroGuemes} alt="Centro Comercial Güemes" /><p className='textoSlides'>Centro Comercial Güemes 1.2Km</p></SwiperSlide>
        <SwiperSlide><img src={playaVarese} alt="Playa Varese" /><p className='textoSlides'>Playa Varese 1.2Km</p></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
