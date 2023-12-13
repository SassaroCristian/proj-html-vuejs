<template>
    <div id="back-g-pricing" class=" w-[100vw] h-[100vh]">
        <div class="text-center pt-[150px]">
            <h3>Pricing plans</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea molestias ab deserunt sit animi iusto, in fugiat
                libero at repellat, dolor voluptates repudiandae enim, eos est vel provident recusandae ut.</p>
        </div>
        <div>
            <div class="grid grid-cols-4 w-[90%] mx-auto bg-red-200">
                <div class="grid grid-rows-9 basis-1/4">
                    <div class="p-5 h-[30vh] border border-[0.5px]">Save up to 40% by paying weekly</div>
                    <div class="p-5 border border-[0.5px]">Number of Courses</div>
                    <div class="p-5 border border-[0.5px]">Time</div>
                    <div class="p-5 border border-[0.5px]">Web Designing</div>
                    <div class="p-5 border border-[0.5px]">Human-Centered
                        Design</div>
                    <div class="p-5 border border-[0.5px]">Basic Marketing</div>
                    <div class="p-5 border border-[0.5px]">Python for Everybody</div>
                    <div class="p-5 border border-[0.5px]">Android Developer</div>
                    <div class="p-5 border border-[0.5px]">Business English</div>
                </div>
                <div class="flex text-center">
                    <div v-for="(info, index) in infoPricing" :key="index" class="grid grid-rows-10 basis-1/4">
                        <div class=" border border-[0.5px] border-red-600">
                            <div class="border border-[0.5px] h-[30vh]  border-black justify-center align-middle">
                                <img :src="info.planImg" alt="Plan Image">
                                <div class="p-5">{{ info.planName }}</div>
                                <div>{{ info.planPrice }}</div>
                            </div>
                            <div class="border border-[0.5px] border-black p-5">{{ info.numberCourses }}</div>
                            <div class="border border-[0.5px] border-black p-5">{{ info.time }}</div>
                            <!-- icone -->
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.webDesigning" /></div>
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.humanCenteredDesigning" /></div>
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.basicMarketing" /></div>
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.python" /></div>
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.androidDev" /></div>
                            <div class="border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.businessEng" /></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { infoPricing } from '../assets/infoPricing';
</script>
   
<style  scoped>
#back-g-pricing {
    background-image: url('../../public/img/page-background-img.png');
}
</style>