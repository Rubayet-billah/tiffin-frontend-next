"use client";
import { testimonials } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import PageHeading from "../ui/PageHeading";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 py-12">
      <PageHeading
        title="What Our User Say About Us"
        subTitle="Some Of Our User Reviews."
      />

      <Swiper
        spaceBetween={36}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 2,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials?.map((review) => (
          <SwiperSlide
            className="mb-12 pt-10 pb-6 px-6 bg-gray-100 rounded-lg"
            key={review.id}
          >
            <div className="">
              <p className="text-center">{review.review}</p>
              <div className="mt-6 text-center">
                <p className="font-medium">{review.fullName}</p>
                <p className="text-sm text-gray-600">{review.position}</p>
              </div>
              <p className="absolute top-1 left-2 text-7xl opacity-10">🙶</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
