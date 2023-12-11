<script>
import { store } from "../store.js" //state management
import navbar from "./navbar.vue";

export default {
    components: {
        navbar
    },
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <header class="container mx-auto">
        <div class="mt-5 flex justify-between items-center">
            <img id="logo-iA" src="/img/logo-default.png" alt="">
            <navbar />
        </div>
    </header>
</template>

<style scoped>
#logo-iA {
    width: 15%;
}
</style>