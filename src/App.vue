<script>

import pageMain from "./components/pageMain.vue";
import swiperCarousel from "./components/swiperCarousel.vue";
import swiperCarousel2 from "./components/swiperCarousel2.vue";
import swiperCarousel3 from "./components/swiperCarousel3.vue";
import info from "./components/info.vue";
import cardSlider from './components/cardSlider.vue';
import pricingPlans from './components/pricingPlans.vue';
import pageFooter from './components/pageFooter.vue'


export default {
  components: {
    swiperCarousel,
    swiperCarousel2,
    swiperCarousel3,
    pageMain,
    info,
    cardSlider,
    pricingPlans,
    pageFooter

  },
  data() {
    return {

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
  <swiperCarousel2 />
  <info />
  <cardSlider />
  <pricingPlans />
  <swiperCarousel3 />
  <pageFooter />
</template>

<style scoped></style>
