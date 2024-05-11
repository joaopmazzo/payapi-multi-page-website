<script lang="ts">
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style scoped>
.background {
  background-image: url("./assets/shared/desktop/bg-pattern-circle.svg");
  background-position: top 160px right 50%;
}
</style>

<style>
hr {
  border-color: #51657545; 
}
</style>