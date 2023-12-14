import React from "react";
import { useLocation } from "react-router-dom";
import "./single_bus.scss";
import { cars } from "../Home/buses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SingleCar = () => {
  const location = useLocation();
  const busLink = location.state;

  const car = cars.find((car) => car.link === busLink);
  return (
    <>
      <main className="main-single-bus">
        <div className="car-div">
          <h1>JUŻ WKRÓTCE ...</h1>
        </div>

        <div className="desc">
          <h1>{car.info.name}</h1>
          <pre>{car.info.description}</pre>
          <p className="spec-title">Specyfikacje:</p>
          <ul>
            {car.info.spec.map((singleSpec) => (
              <li key={singleSpec}>{singleSpec}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default SingleCar;
