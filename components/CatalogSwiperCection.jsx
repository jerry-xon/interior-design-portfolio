"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  const orgText = "Design Rooted in Exploration and Detail";
  const textshow = orgText.toUpperCase();
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-2">
        <div className="text-left ">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold tracking-wider">{textshow}</h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <div>
              <p>
                A design language where timeless elegance meets contemporary
                clarity.
              </p>
            </div>
            <div>
              <p>
                With a passion for interiors and furniture, I strive to create
                spaces that feel both luxurious and inviting. My work focuses on
                blending modern aesthetics with classic sensibilities, ensuring
                that every environment supports comfort, harmony, and meaningful
                living.
              </p>
              <a
                href="/gallery"
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
              >
                View Gallery <TbArrowUpRight />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/portwork/Pic7.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/portwork/Pic15.png"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/portwork/Pic16.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/portwork/Pic11.png"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/portwork/Pic17.png"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
