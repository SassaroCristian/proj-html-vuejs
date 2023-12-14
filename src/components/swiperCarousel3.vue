<script setup>
import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/bundle';
import { carouselData3 } from '../assets/carouselData';

</script>
<template>
    <div class="w-[100vw] h-[30vh]  m-auto">
        <div class="flex items-center justify-center h-full ">
            <swiper :slidesPerView="4" :loop="true" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide><img class="w-[60%] mx-auto" src="../../public/img/h5-client-1.png" alt=""></swiper-slide>
                <swiper-slide><img class="w-[60%] mx-auto" src="../../public/img/h5-client-2.png" alt=""></swiper-slide>
                <swiper-slide><img class="w-[60%] mx-auto" src="../../public/img/h5-client-3.png" alt=""></swiper-slide>
                <swiper-slide><img class="w-[60%] mx-auto" src="../../public/img/h5-client-4.png" alt=""></swiper-slide>
                <swiper-slide><img class="w-[60%] mx-auto" src="../../public/img/h5-client-5.png" alt=""></swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation, A11y, Virtual],
        };
    },
};
</script>



<style scoped></style>