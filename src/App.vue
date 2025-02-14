<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader class="header" />
  <RouterView class="content" />
  <TheFooter class="footer" />
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 99;
}
.content {
  margin: 9vmin 0;
  min-height: 80vh;
}

@media (max-width: 768px) {
  .header {
  width: 100%;
  position: fixed;
}
.content {
  margin-top: 13vmin;
}
}
</style>
