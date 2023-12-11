<template>
    <div class="flex justify-center items-center" v-for="link in navData">
        <a class="" href="#">{{ link.navLink }}</a>
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