<template>
    <div id="back-g-pricing" class=" w-[100vw] h-[100vh]">
        <div class="text-center">
            <h3 class="text-[4rem]">Pricing plans</h3>
            <p class="text-[1.5rem] px-[15%] my-[2%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea molestias
                ab
                deserunt sit
                animi iusto, in fugiat
                libero at repellat, dolor voluptates repudiandae enim, eos est vel provident recusandae ut.</p>
        </div>
        <div>
            <div class="flex w-[90%] mx-auto">
                <div class="w-[25%]">
                    <div class="p-5 h-[30vh] text-[4rem] border border-[0.5px] pt-[20%]">Save up to 40% by paying weekly
                    </div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Number of Courses</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Time</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Web Designing</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Human-Centered
                        Design</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Basic Marketing</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Python for Everybody</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Android Developer</div>
                    <div class="text-[1.5rem] p-5 border border-[0.5px]">Business English</div>
                </div>
                <div class="flex text-center">
                    <div v-for="(info, index) in infoPricing" :key="index" class="w-[23vw]">
                        <div class="">
                            <div
                                class="border border-[0.5px] h-[30vh]  border-black justify-center align-middle bg-[#F2F8FC]">
                                <img class="m-auto w-[35%] mt-[7%]" :src="info.planImg" alt="Plan Image">
                                <div class="p-5 text-[1.5rem]">{{ info.planName }}</div>
                                <div class="text-[1.5rem]">{{ info.planPrice }}</div>
                            </div>
                            <div class="border border-[0.5px] border-black p-5 text-[1.5rem]">{{ info.numberCourses }}</div>
                            <div class="border border-[0.5px] border-black p-5 text-[1.5rem]">{{ info.time }}</div>
                            <!-- icone -->
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.webDesigning" /></div>
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.humanCenteredDesigning" /></div>
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.basicMarketing" /></div>
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.python" /></div>
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
                                    :icon="info.androidDev" /></div>
                            <div class="text-[1.5rem] border border-[0.5px] border-black p-5"><font-awesome-icon class=""
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