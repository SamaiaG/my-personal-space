<template>
  <div class="popup-bg">
    <div class="popup" @click.stop>
      <img
        src="../assets/images/Close_MD.svg"
        alt="close"
        class="close-icon"
        @click="$emit('close')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.popup-bg {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  overflow: auto;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  padding: 5vmin;
  background-color: white;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.close-icon {
  position: absolute;
  top: 2vmin;
  right: 2vmin;
  width: 3vmin;
  cursor: pointer;
}
</style>
