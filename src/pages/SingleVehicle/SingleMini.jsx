import React from "react";
import { useLocation } from "react-router-dom";
import "./single_bus.scss";
import { miniBuses } from "../Home/buses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SingleMini = () => {
  const location = useLocation();
  const busLink = location.state;

  const bus = miniBuses.find((bus) => bus.link === busLink);
  return (
    <>
      <main className="main-single-bus">
        <div className="swiper-div">
          <Swiper
            pagination={{
              type: "progressbar"
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {bus.info.images.map((img) => (
              <SwiperSlide key={img}>
                <img src={img} alt="Bus" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Link to="kontakt" state={bus.info.name}>
            <button>Zarezerwuj teraz !</button>
          </Link>
        </div>

        <div className="desc">
          <h1>{bus.info.name}</h1>
          <pre>{bus.info.description}</pre>
          <p className="spec-title">Specyfikacje:</p>
          <ul>
            {bus.info.spec.map((singleSpec) => (
              <li key={singleSpec}>{singleSpec}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default SingleMini;
