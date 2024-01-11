import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import image from '../assets/image-001.png'
import image2 from '../assets/image-002.png'
import image3 from '../assets/image-005.png'
import image4 from '../assets/image-004.png'

function Screen_Slider() {
  return (
    <div id="screen-bg-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="bg-slider"
      >
        <SwiperSlide>
          <img src={image} alt="Picture of a woman sitting in car" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Picture of a woman sitting in car and on the phone with someone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Picture of two women sitting in car" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image4}
            alt="Picture of a woman sitting in car and using a laptop"
          />
        </SwiperSlide>
      </Swiper>
      <div className="screen-bg-content">
        We move special guests <br />
        and famous people for <br />
        the big events
      </div>
    </div>
  )
}

export default Screen_Slider
