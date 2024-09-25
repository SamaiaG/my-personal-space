<template>
  <div class="item-container">
    <div class="gallery-item">
      <template v-if="imageSrc">
        <img :src="imageSrc" alt="card image" class="card-image rounded cursor-pointer" @click="openModal" />
      </template>
      <template v-else-if="src">
        <iframe :src="src" class="card-iframe" @click="openModal" title="Project Preview"></iframe>
      </template>
      <div class="item-description">
        <h3>
          <!-- Conditional rendering of the title link -->
          <template v-if="!isCssProject">
            <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="title">{{ title }}</RouterLink>
          </template>
          <template v-else>
            <span class="title">{{ title }}</span>
          </template>
        </h3>
        <!-- Conditional rendering of the description -->
        <template v-if="!isCssProject">
          <p class="card-text description pt-3">{{ description.slice(0, 100) + '...' }}</p>
        </template>
        <p v-if="!isCssProject" class="card-text"><small class="update text-muted">Last updated: {{ lastUpdate }}</small></p>
      </div>
    </div>
    <div v-if="isModalOpen" class="modal-container" @click.self="closeModal">
  <div class="modal-content">
    <template v-if="imageSrc">
      <img :src="imageSrc" alt="Full screen image" class="modal-image" />
    </template>
    <template v-else-if="src">
      <iframe :src="src" class="modal-iframe" title="Project Fullscreen"></iframe>
    </template>
  </div>
</div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  imageSrc: String,
  src: String,
  lastUpdate: String,
  projectId: String
});

// Determine if the project is a CSS project
const isCssProject = computed(() => !!props.src); 

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.title {
  text-decoration: none;
  color: #393737;
}
.title:hover {
  color: #E67E22;
}
.description {
  font-size: 1vmin;
  color: #393737;
  min-height: 6vh;
}
.item-container {
  width: 100%;
  padding: 4vmin 6vmin;
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
}
.modal-content {
  position: relative;
  width: 80vw;
  height: 80vh;
}
.modal-image,
.modal-iframe {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: none;
  border-radius: 10px;
}

.card-image {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  object-position: left;
}

.card-iframe {
  width: 100%;
  height: 30vh;
  border: none;
}

.update {
  font-size: 1vmin;
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

@media (max-width: 1024px) {
  .title {
    font-size: 4vmin;
  }
  .description {
    font-size: 2vmin;
  }
  .item-container {
    padding: 2vmin 0;
  }
}
</style>
