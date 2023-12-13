<script setup>
import { infoData, infoSingleCell } from '../assets/infoData';
</script>

<template>
    <div class="flex h-[100vh] w-[100vw] mt-[220px] mx-[100px]">
        <div class="flex flex-col ">
            <div v-for="(data, index) in infoData" :key="index" @click="selectCard(index)">
                <div class="cursor-pointer border border-[0.3px]">
                    <p class="p-10 text-[40px]">{{ data.title }}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="absolute ml-[90px]" v-for="(info, index) in infoSingleCell" :key="index"
                v-show="selectedCard === index">
                <h3 class="text-[90px]">{{ info.title }}</h3>
                <p class="text-[45px] my-[60px]">{{ info.description }}</p>
                <div class="flex align-bottom">
                    <ul>
                        <li class="flex  my-12" v-for="(item, itemIndex) in info.listItem" :key="itemIndex">
                            <font-awesome-icon class="text-[color:#40C4FF] fa-2xl mr-5 self-center" :icon="item.icon" />
                            <p class="text-[30px]">{{ item.content }}</p>
                        </li>
                    </ul>
                    <img class=" m-40 w-[20%]" :src="info.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script>
import { ref } from 'vue';

const selectedCard = ref(0);

const selectCard = (index) => {
    selectedCard.value = index;
};
</script>

