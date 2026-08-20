"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Typography } from "../Atoms/Typography";
import { PageLayout } from "../Layouts/PageLayout";
import { FlexBox } from "../Template/FlexBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

function OnboardScreen() {
  return (
    <PageLayout>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide className="relative">
          <Image
            fill
            alt=""
            src="https://swiperjs.com/demos/images/abstract-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </PageLayout>
  );
}

export { OnboardScreen };
