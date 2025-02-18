import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import flechaDer from "../../img/icons/flechaDer.png";
import flechaIzq from "../../img/icons/flechaIzq.png";

const Swiper3 = ({ images }) => {
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
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}

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

export default Swiper3;
