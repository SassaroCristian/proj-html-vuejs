<script setup>

import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { carouselData2 } from '../assets/carouselData';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';

</script>

<template>
    <div id="back-g-carousel2" class="flex items-center justify-center h-full">
        <Swiper class="text-white" :slides-per-view="1" :space-between="50"
            :modules="[Navigation, Pagination, A11y, Virtual]" navigation
            :pagination="{ clickable: true, dynamicBullets: true }" grab-cursor>
            <SwiperSlide v-for="data in carouselData2" :key="data">
                <div class="flex flex-col items-center ">
                    <img class=" w-[6%]" :src="data.icon" alt="">
                    <p class="mt-20 text-center text-[30px] mx-[20%]">{{ data.text }}</p>
                    <p class="mt-20 text-[30px] font-semibold">{{ data.user }}</p>
                    <p class="text-[30px]">{{ data.role }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination swiper-pagination-custom" style="bottom: 20px;"></div>
    </div>
</template>


<style>
#back-g-carousel2 {
    background-image: url('../../public/img/h5-parallax-img-1.png');
    height: 100vh;
    width: 100vw;
}
</style>