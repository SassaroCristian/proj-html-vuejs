<script>
import navbar from "./components/navbar.vue"
import pageHeader from "./components/pageHeader.vue";

import { store } from "./store.js" //state management

export default {
  components: {
    navbar,
    pageHeader

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
  <pageHeader />
</template>

<style scoped></style>
