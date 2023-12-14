<script setup>

import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { carouselData } from '../assets/carouselData';
import { Swiper, SwiperSlide } from 'swiper/vue';
import pageHeader from "./pageHeader.vue";
import { infoCard } from '../assets/infoCard';

import 'swiper/css';
import 'swiper/css/bundle';

</script>

<template>
    <div class="h-[100vh] w-[100vw]">
        <Swiper :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination, A11y, Virtual]" navigation
            :pagination="{ clickable: true, dynamicBullets: true }" grab-cursor>
            <SwiperSlide v-for="data in carouselData" :key="data">
                <div class="relative">
                    <img class="w-[100vw] h-[100vh] image" :src="data.image" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
        <pageHeader class="absolute top-0 z-10 nav-centered-custom" />
    </div>
</template>

<style>
.nav-centered-custom {
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
}

.swiper-button-prev {
    z-index: 100 !important;
}

.image {
    filter: brightness(0.7);
    transform: scale(1, 1.4);
}
</style>