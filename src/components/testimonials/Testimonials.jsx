import React from "react";
import "./Testimonials.css";
import Image3 from "../../assets/avatar-3.svg";
import Image4 from "../../assets/avatar-4.svg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image4,
      title: "Mrs.Upeksha",
      subtitle: "Government ICT Teacher",
      comment:
        "Highly appreciate and recommend your great skills on IT. Specially on web designing. very flexible and always provide qualitative and the best service for the work. Wish you all the best for the future career.",
    },
    {
      id: 2,
      image: Image3,
      title: " Ahmad A.",
      subtitle: "Upwork Client/Freelandco CEO ",
      comment:
        "I would highly recommend Hasindu to anyone looking for a talented and professional website developer. His skills, expertise, and dedication make him a true asset to any project, and his commitment to delivering top-quality work is unparalleled. Thank you, Hasindu, for your outstanding work on this project!",
    },
    {
      id: 2,
      image: Image3,
      title: "Thimira Navodya",
      subtitle: "Engineering UG",
      comment:
        "I am happy to recommend your high quality service of all segments of web designing. Specially UI designing is excellent. And it is very esay and convenient to communicate with you.",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
