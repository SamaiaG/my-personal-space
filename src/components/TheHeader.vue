<template>
  <header>
    <div class="h-container">
      <RouterLink to="/"> 
        <img src='../assets/images/logo_color.png' alt="logo" class="logo" /></RouterLink>
      <div class="nav-wide">
        <RouterLink to="/about" class="h-link">About me</RouterLink>
        <RouterLink to="/skills" class="h-link">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link">Contact</RouterLink>
      </div>
      <div class="hamburger" :class="{ 'is-open': isHamOpen }" @click="toggleHam"></div>
      <HamburgerMenu class="hamburger-menu" v-if="isHamOpen" :closeHam="toggleHam" />
    </div>
  </header>
</template>

<script setup>
import HamburgerMenu from './HamburgerMenu.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isHamOpen = ref(false);

function toggleHam() {
  isHamOpen.value = !isHamOpen.value
}

function handleClickOutside(event) {
  const menu = document.querySelector('.hamburger-menu');
  if (menu && !menu.contains(event.target) && event.target.closest('.hamburger') === null) {
    toggleHam();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.h-container {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 0 16vmin;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: var(--second-shadow);
}

.logo {
  width: 6vmin;
  height: 6vmin;
  margin: 1.5vmin;
}

.hamburger {
  display: none;
  background-image: url('../assets/images/icons/bars-solid.svg');
  background-size: cover;
  background-position: center;
  width: 5vmin;
  height: 5vmin;
  margin-right:1vmin;
  margin: 2vmin;
}

.hamburger.is-open{
  background-image: url('../assets/images/icons/xmark-solid.svg');
}

.nav-wide {
  display: flex;
  align-items: stretch;
}
.h-link {
  font-weight: 500;
  text-decoration: none;
  color: #333333e4;
  padding: 0.8vmin 2vmin;
  place-content: center;
}
.h-link:hover,
a:hover {
  box-shadow: var(--first-shadow);
  transition: all 0.3s ease;
}
.hamburger-menu{
  position: fixed;
  top: 9vmin;
  right: 0;
}

@media (max-width: 768px) {
  .nav-wide{
    display: none;
  }
  .hamburger{
    display: block;
    cursor: pointer;
  }
  .h-container {
    padding: 0 3vmin;
  }
}
</style>
