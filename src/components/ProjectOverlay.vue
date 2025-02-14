<template>
    <div class="project-overlay">
        <div class = "logo">
            <img :src="logo || '../assets/images/Logo.png'" alt="project image" class="project-image" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.project-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255,255,255,0.4);
-webkit-backdrop-filter: blur(22px);
backdrop-filter: blur(22px);
  top: 0;
  padding: 4vmin 6vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.logo {
  object-fit: contain; 
}



</style>