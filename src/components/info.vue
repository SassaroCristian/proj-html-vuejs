<script setup>
import { infoData, infoSingleCell } from '../assets/infoData'; 
</script>

<template>
    <div class="h-[80vh] w-[100vw] mt-[10%] flex">
        <div class="flex flex-col ml-[20%]">
            <div v-for="(data, index) in infoData" :key="index" @click="selectCard(index)">
                <div class="cursor-pointer border border-[1px] flex justify-start items-center">
                    <p class=" p-7 text-[2.5rem]">{{ data.title }}</p>
                </div>
            </div>
        </div>
        <div class="relative w-[50vw] ">
            <div class="absolute ml-[5%]" v-for="(info, index) in infoSingleCell" :key="index"
                v-show="selectedCard === index">
                <h3 class="text-[4rem]">{{ info.title }}</h3>
                <p class="text-[1.5rem] w-[60%]">{{ info.description }}</p>
                <div class="flex align-bottom">
                    <ul class="pt-[4%]">
                        <li class="flex py-8" v-for="(item, itemIndex) in info.listItem" :key="itemIndex">
                            <font-awesome-icon class="text-[color:#40C4FF] fa-2xl mr-5 self-center" :icon="item.icon" />
                            <p class="text-[1.8rem]">{{ item.content }}</p>
                        </li>
                    </ul>
                    <img class="pt-[20%] m-10 w-[17%] h-[17%]" :src="info.image" alt="">
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

