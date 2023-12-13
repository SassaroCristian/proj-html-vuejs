<script>
import navbar from "./navbar.vue";

export default {
    components: {
        navbar,
    },
    data() {
        return {};
    },
    methods: {

    },
}
</script>

<template>
    <header class="-z-100">
        <div class="mt-5 flex justify-around items-center">
            <navbar />
        </div>
        <div class="h-[80vh] w-[60vw] absolute hero-custom">
            <h1 class="text-[120px] text-white">Contemporary Ideas</h1>
            <p class="text-[25px] text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus
                tenetur,
                dignissimos iste quis<br>
                esse, alias quae, error voluptatum quos ipsa magnam at ducimus hic eveniet officia eligendi soluta
                illum.
            </p>
            <button class="container text-[25px] bg-blue-500 h-[110px] w-[300px] mt-16 text-white">REGISTER NOW</button>
        </div>
    </header>
</template>

<style scoped>
#logo-iA {
    width: 15%;
}

.hero-custom {
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
