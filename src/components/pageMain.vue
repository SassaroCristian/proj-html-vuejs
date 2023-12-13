<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Languages",
                    image: "./img/h5-custom-icon-1.png",
                },
                {
                    title: "Software",
                    image: "./img/h5-custom-icon-2.png",
                },
                {
                    title: "Business",
                    image: "./img/h5-custom-icon-3.png",
                },
                {
                    title: "Chemistry",
                    image: "./img/h5-custom-icon-4.png",
                },
                {
                    title: "Science",
                    image: "./img/h5-custom-icon-5.png",
                },
                {
                    title: "DIY & Craft",
                    image: "./img/h5-custom-icon-6.png",
                },
            ],
        }
    }
}

</script>

<template>
    <div class="mt-32 mx-20">
        <div class="flex justify-between text-center">
            <div class="p-20 bg-[color:#F2F8FC]" v-for="(card, index) in cards" :key="index">
                <img id="card-img" class="mx-auto" :src="card.image" alt="Card Image">
                <h3 class="mt-10">{{ card.title }}</h3>
            </div>
        </div>

        <h1 class="mt-64 text-[90px] mb-20">The Trusted Name <br>
            for In-Home Tutoring.</h1>
        <p class="text-[35px] mb-20">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum
            auci
            elit consequat
            ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.</p>
        <a class="text-[color:#40C4FF] text-[20px] font-bold" href="#">LEARN MORE</a>
    </div>
    <img class="mx-auto w-[95%]" src="../../public/img/h5-img-1.jpg" alt="">
    <div class="m-24 flex">
        <img class="w-1/2 h-[100%] pl-40" src="../../public/img/h5-img-2.jpg" alt="">
        <div>
            <p class="text-[85px]">
                Empowering <br>
                Children to Reach <br>
                Their Potential.
            </p>
            <p class="text-[35px] mt-10">
                Lorem ipsum gravida nibh vel velit auctor <br>
                aliquetnean sollicitudin, lorem quis<br>
                bibendum
                auci elit consequat
                ipsutis<br> sem nibh id eis sed
                olla Siamenin Muniat
            </p>
            <div class="flex justify-between mt-10">
                <div class="">
                    <p class="text-[90px] text-[color:#40C4FF] ">168</p>
                    <p class="text-[40px]  text-[color:#40C4FF]">User Stories</p>
                </div>
                <div>
                    <p class="text-[90px] text-[color:#40C4FF]">347</p>
                    <p class=" text-[color:#40C4FF]">Events</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-img {
    width: 100%;
}
</style>
