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
    <div class="container mx-auto">
        <div class="flex justify-between text-center">
            <div class="p-10 bg-slate-300" v-for="(card, index) in cards" :key="index">
                <img id="card-img" class="mx-auto" :src="card.image" alt="Card Image">
                <h3 class="mt-10">{{ card.title }}</h3>
            </div>
        </div>

        <h1>The Trusted Name <br>
            for In-Home Tutoring.</h1>
        <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
            ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.</p>
        <a href="#">LEARN MORE</a>
    </div>
    <img class="mx-auto" src="../../public/img/h5-img-1.jpg" alt="">
    <div class="m-24 flex">
        <img class="w-1/2" src="../../public/img/h5-img-2.jpg" alt="">
        <div>
            <p>
                Empowering <br>
                Children to Reach <br>
                Their Potential.
            </p>
            <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
                ipsutis sem nibh id eis sed
                olla Siamenin Muniat
            </p>
            <div class="flex">
                <div>
                    <p>168</p>
                    <p>User Stories</p>
                </div>
                <div>
                    <p>347</p>
                    <p>Events</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-img {
    width: 70%;
}
</style>
