<template>
  <header>
    <div class="h-container">
      <RouterLink to="/">  <div id="logo"></div></RouterLink>
      <div class="nav-wide">
        <RouterLink to="/about" class="h-link">About me</RouterLink>
        <RouterLink to="/skills" class="h-link">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link">Contact</RouterLink>
      </div>
      <div class="hamburger" @click="toggleHam">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      </div>
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
  backdrop-filter: blur(10px) ;
}

#logo {
  background-image: url('../assets/images/logoS.svg');
  background-size: cover;
  background-position: center;
  width: 10vmin;
  height: 10vmin;
  margin-left:0.8vmin;
  margin-top: 0.8vmin
}
#logo:hover {
  background-image: url('../assets/images/logo_w.png');
}

.hamburger {
  display: none;
  width: 9vmin;
  cursor: pointer;
  fill: #F16529;
  padding: 2.5vmin 2vmin 2vmin 2vmin;
}

.hamburger:hover {
  background-color: rgba(243, 139, 74, 0.8);
  fill:white
}

.nav-wide {
  display: flex;
  align-items: stretch;
}
.h-link {
  font-size: 1rem;
  text-decoration: none;
  color: #393737;
  padding: 0.8vmin 2vmin;
  place-content: center;
}
.h-link:hover,
a:hover {
  background-color: rgba(243, 139, 74, 0.8);
  color: white;
}

.hamburger-menu{
  position: fixed;
  top: 11vmin;
  right: 6vmin;
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
    padding: 0 6vmin;
  }
}
</style>
