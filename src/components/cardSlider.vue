<template>
    <vue-carousel :navigation-enabled="true">
        <div class="example-slide" v-for="(slide, index) in slidesData" :key="index">
            <div class="flex space-x-4">
                <div v-for="card in slide.cards" :key="card.id" class="h-[80vh] w-[450px] border border-black border-[1px]">
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
        </div>
    </vue-carousel>
</template>

<script>
import { ref } from 'vue';
import { Carousel } from 'vue-carousel';
import { infoCard } from '../assets/infoCard';

export default {
    components: {
        'vue-carousel': Carousel,
    },
    setup() {
        const slidesData = ref(infoCard[0].slides);

        return {
            slidesData,
        };
    },
};
</script>

<style scoped>
.example-slide {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 10rem;
}
</style>
