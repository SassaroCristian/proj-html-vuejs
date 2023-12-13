<template>
    <div class="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-500">
        <h3>Popular Online Courses</h3>

        <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci
            elit consequat ipsutis sem nibh id elit</p>
        <Swiper :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination, A11y, Virtual]" navigation
            :pagination="{ clickable: true, dynamicBullets: true }" grab-cursor>
            <SwiperSlide v-for="(card, index) in `${infoCard[0].list[index]}`" :key="card.id">
                <div>
                    <div class="h-[80vh] w-[450px] border border-black border-[1px]">
                        <img :src="card.image" alt="">
                        <div class="flex justify-between m-10">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.price }}</p>
                        </div>
                        <p class="ml-10">{{ card.fullName }}</p>
                        <p class="m-10">{{ card.description }}</p>
                        <div class="flex">
                            <div class="flex">
                                <font-awesome-icon class="" :icon="card.userIcon" />
                                <p>{{ card.countUser }}</p>
                            </div>
                            <div>
                                <font-awesome-icon class="" :icon="card.labelIcon" />
                                <p>{{ card.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>

import { infoCard } from '../assets/infoCard';
import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';

export default {
    setup() {
        return {
            infoCard
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Navigation,
        Pagination,
        A11y,
        Virtual,
    }
}
</script>

<style scoped></style>