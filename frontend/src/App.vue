<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <main class="flex-grow">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
