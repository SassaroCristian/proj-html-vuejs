<script setup>
import { infoData, infoSingleCell } from '../assets/infoData';
</script>

<template>
    <div class="h-[100vh] w-[100vw] mt-[50px] flex">
        <div class="flex flex-col">
            <div v-for="(data, index) in infoData" :key="index" @click="selectCard(index)">
                <div class="cursor-pointer border border-[1px] flex justify-start items-center">
                    <p class="pl-10 pr-20 py-5 text-[25px]">{{ data.title }}</p>
                </div>
            </div>
        </div>
        <div class="relative w-[50vw] custom-vertical-alignment">
            <div class="absolute ml-[40px]" v-for="(info, index) in infoSingleCell" :key="index"
                v-show="selectedCard === index">
                <h3 class="text-[40px]">{{ info.title }}</h3>
                <p class="text-[25px]">{{ info.description }}</p>
                <div class="flex align-bottom">
                    <ul>
                        <li class="flex" v-for="(item, itemIndex) in info.listItem" :key="itemIndex">
                            <font-awesome-icon class="text-[color:#40C4FF] fa-2xl mr-5 self-center" :icon="item.icon" />
                            <p class="text-[18px]">{{ item.content }}</p>
                        </li>
                    </ul>
                    <img class=" m-10 w-[40px]" :src="info.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-vertical-alignment {
    transform: translateY();
}
</style>

<script>
import { ref } from 'vue';

const selectedCard = ref(0);

const selectCard = (index) => {
    selectedCard.value = index;
};
</script>

