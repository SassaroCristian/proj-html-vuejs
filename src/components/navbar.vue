<template>
    <img id="logo-iA" src="/img/logo-light.png" alt="">
    <div class="z-[50]" v-for="link in navData">
        <a class="text-2xl text-white" href="#">{{ link.navLink.toUpperCase() }}</a>
    </div>
    <div>
        <a href="#">
            <font-awesome-icon class=" text-white fa-2xl " icon="fa-solid fa-magnifying-glass" />
        </a>
        <a href="#">
            <font-awesome-icon class="  text-white fa-2xl pl-10 pr-10" icon="fa-solid fa-bag-shopping" />
        </a>
        <a href="#">
            <font-awesome-icon class="fa-2xl text-white" icon="fa-solid fa-bars" />
        </a>
    </div>
</template>

<script setup>

const navData = [
    { navLink: 'Home' },
    { navLink: 'Courses' },
    { navLink: 'Instructions' },
    { navLink: 'Events' },
    { navLink: 'Pages' },
    { navLink: 'Elements' },
];

</script>

<style lang="scss" scoped></style>