<script>

import pageMain from "./components/pageMain.vue";
import navbar from "./components/navbar.vue"
import { store } from "./store.js"
import swiperCarousel from "./components/swiperCarousel.vue";

export default {
  components: {
    swiperCarousel,
    pageMain,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.doThings();

  },
  methods: {
    doThings() {
      console.log("App.vue does things");
    }
  }
}

</script>

<template>
  <swiperCarousel />
  <pageMain />
</template>

<style scoped></style>
