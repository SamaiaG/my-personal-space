<script setup>
import { defineProps } from 'vue';

const props = defineProps(['visible']);
const emit = defineEmits(['closePopup']);
</script>

<template>
  <div v-if="visible" class="popup-overlay">
    <div class="popup">
      <p class="popup-text">Just a heads-up — I’m constantly updating this website to make it better. You might see some changes along the way. Thanks for stopping by! 🚀</p>
      <div class="popup-button" @click="emit('closePopup')">OK!</div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.popup {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 6vmin;
  margin: 6vmin;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.popup-button {
  color:  var(--text-charcoal);
  text-decoration: none;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(250,214,214,1) 81%);
  cursor: pointer;
  width: 14vmin;
  font-size: 2vmin;
  margin-top: 2vmin;
}
.popup-button:hover{
  text-decoration: none;
  color:  var(--text-charcoal);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(197,212,234,1) 81%);
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .popup-text, .popup-button {
    font-size: 4vmin;
  }
}
</style>
