import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import flechaDer from "../../img/icons/flechaDer.png";
import flechaIzq from "../../img/icons/flechaIzq.png";

import parqueSanMartin from "../../img/parqueSanMartin.jpg";
import centroPuerto from "../../img/centroPuerto.jpg";
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg";

export default () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, A11y, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={balnearioPuntaMogotes} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 4" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 5" className="slide-image" />
        </SwiperSlide>

        <div className="swiper-button-prev-custom swiper-button-custom">
          <img src={flechaIzq} alt="Previous" />
        </div>
        <div className="swiper-button-next-custom swiper-button-custom">
          <img src={flechaDer} alt="Next" />
        </div>
      </Swiper>
    </div>
  );
};
