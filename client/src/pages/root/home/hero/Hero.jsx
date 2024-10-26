import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./hero.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      {" "}
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.kushtia.gov.bd/top_banner/2d039e6a_be68_4949_9467_ec9ce57bd541/ddc896774dcd3167be1b0dbe7bac1549.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.kushtia.gov.bd/top_banner/3d9b2ec0_9852_41f4_a39f_4db32fd77c28/4b1025c185d3262ec917aa93f3cbfef2.png"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.kushtia.gov.bd/top_banner/cd1e0973_1c3a_11e7_8f57_286ed488c766/ad106f1e7a469b90d49ec17cb28961bc.png"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.kushtia.gov.bd/top_banner/cdaad95c_1c3a_11e7_8f57_286ed488c766/03abd5fff279f254d34190fc3ef6c80d.png"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
