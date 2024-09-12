<template>
  <div class="gallery">
      <div class="gallery-item">
        <img :src="imageSrc" alt="card image" class="card-image rounded cursor-pointer" @click="openModal" />
        <div class="item-description">
          <h3> <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="title">{{title}}</RouterLink></h3>
          <p class="card-text description pt-3"> {{ description }}</p>
          <p class="card-text"><small class="update text-muted">Last updated: {{lastUpdate}}</small></p>
        </div>
      </div>
      <div v-if="isModalOpen" class="modal-container" @click="closeModal">
      <img :src="imageSrc" alt="Full screen image" class="modal-image" />
    </div>
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
.title {
  font-size: 3.5vmin;
  text-decoration: none;
  color: #393737;
}
.title:hover{
  color:#E67E22
}
.description {
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

.gallery {
  padding: 2rem;
}
.gallery-item {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: var(--second-shadow);
}
.gallery-item:hover {
  transform: translateY(-5px);
}
.item-description {
  padding: 1rem;
  text-align: center;
}
.item-description h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #333;
}
.item-description p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
.presentation {
  display: flex;
  gap: 3vmin;
  align-items: center;
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