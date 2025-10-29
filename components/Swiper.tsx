"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { posts } from "@/data/posts";
import FeaturedCreativesCard from "./FeaturedCreatorsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComponent() {
  return (
    <section className="px-4 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-8">Featured Creatives</h2>
        <div className="mr-12 px-3 py-1 font-bold rounded-3xl hover:bg-accentGray">
          <h3 className="text-xl font-light">More creatives</h3>
        </div>
      </div>
      <main
        className="bg-primary p-5"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.slug}>
              <FeaturedCreativesCard
                title={post.title}
                image={post.image}
                username={post.username}
                slug={post.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
