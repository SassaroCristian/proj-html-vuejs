
<script setup>

import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { debug } from '../assets/carouselData';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';

</script>

<template>
    <div id="back-g-carouselCard" class="flex items-center justify-center h-full">
        <Swiper class="text-white" :slides-per-view="3" :space-between="30"
            :modules="[Navigation, Pagination, A11y, Virtual]" :pagination="{ clickable: true, dynamicBullets: true }"
            grab-cursor>
            <SwiperSlide v-for="data2 in debug" :key="data2">
                <div class="flex flex-col items-center ">
                    <img class="" :src="data2.image" alt="">
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination swiper-pagination-custom" style=""></div>
    </div>
</template>


<style>
#back-g-carouselCard {
    background-image: url('../../public/img/background-pattern.jpg');
    height: 100vh;
    width: 100vw;
}
</style>