<template>
  <div class="card-container">
  <div class="card mb-3 border-0 shadow p-3 bg-body rounded">
    <img :src="imageSrc" alt="card image" class="card-image rounded cursor-pointer" @click="openModal" />
    <div class="card-body">
        <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="title">{{title}}</RouterLink>
      <p class="card-text description pt-3"> {{ description }}</p>
    <p class="card-text"><small class="update text-muted">Last updated: {{lastUpdate}}</small></p>
  </div>
</div>
</div>
<div class="modal-container" @click="closeModal" v-if="isModalOpen">
  <img :src="imageSrc" alt="fullscreen image" class="modal-image"  />
</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  imageSrc: String,
  lastUpdate: String,
  projectLink: String,
  projectId: String
})

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

</script>

<style scoped>
.card-container {
  padding: 4vw 15%;
  display: flex;
  justify-content: center;
  align-items: center;
} 
.title {
  font-family: 'Raleway', sans-serif;
  font-size: 3.5vmin;
  text-decoration: none;
  color: #393737;
}
.title:hover{
  text-decoration: underline;
  color:#E67E22
}
.description {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5vmin;
  color: #393737;
  min-height: 6vh;
}
.card{
  width: 80%;
}

/* modal */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.modal-image {
  width: 80vw;
  height: 80vh;
  object-fit: contain;
}

.update{
  font-size: 1vmin;
}

@media (max-width: 1024px) {
 
  .title {
    font-size: 4vmin;
  }
  .description {
    font-size: 2vmin;
  }
}
</style>