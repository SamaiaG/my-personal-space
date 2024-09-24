<template>
  <div class="css-art">
    <BaseSection class="first-css-section">
      <div class="presentation">
        <div class="about-me">
          <h1 class="heading">This is me,</h1>
          <h3 class="heading2">and below is my kind of therapy.</h3>
        </div>
        <iframe src="https://samaiag.github.io/css-fun/duolingoavatar/index.html" title="girl" class="me"></iframe>
      </div>
    </BaseSection>
    <div class="css-items">
      <p class="description">
        Here's a fun collection of my CSS illustrations! I create these whenever
        I'm feeling tired, using them as a way to unwind. Some are inspired by
        other artists, while others come straight from my imagination or
        everyday life. It's a great way for me to relax and have fun with
        coding! Enjoy exploring my colorful creations!
      </p>

      <div class="gallery">
        <div class="gallery-item" v-for="item in galleryItems" :key="item.title" @click="openModal(item)">
          <iframe :src="item.src" :title="item.title"></iframe>
          <div class="item-description">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>

        <div v-if="isModalOpen" class="modal-container" @click="closeModal">
          <iframe v-if="selectedItem" :src="selectedItem.src" alt="Full screen image" class="modal-image"></iframe>
        </div>
      </div>
    </div>
    <BaseBlob />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BaseSection from '@/components/BaseSection.vue';
import BaseBlob from '@/components/BaseBlob.vue';

const galleryItems = ref([]); 
const isModalOpen = ref(false);
const selectedItem = ref(null);

const openModal = (item) => {
  selectedItem.value = item; 
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null; 
};

const fetchGalleryItems = async () => {
  try {
    const response = await axios.get('data/cssfun.json'); 
    galleryItems.value = response.data; 
  } catch (error) {
    console.error('Error fetching gallery items:', error);
  }
};

onMounted(() => {
  fetchGalleryItems();
});
</script>

<style scoped>
iframe {
  border: none;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: var(--second-shadow);
}

.css-items {
  padding: 2vmin 16vmin;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
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
.description {
  font-size: 2vmin;
  color: var(--color-text);
  text-align: center;
  padding: 1vmin 2vmin;
}
.item-description {
  padding: 1vmin;
  text-align: center;
}
.item-description h3 {
  margin: 0 0 0.5vmin;
  font-size: 2vmin;
  color: var(--color-text);
}
.item-description p {
  margin: 0;
  font-size: 1.5vmin;
  color: #666;
}
.presentation {
  display: flex;
  gap: 3vmin;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.1vmin;
}
.me {
  width: 55vmin;
  height: 45vmin;
  box-shadow: none;
  margin: -5vmin;
}
:deep(.section) {
  padding: 2vmin 16vmin;
}
.heading{
  font-size: 4vmin;
  color: var(--color-text);
}
.heading2{
  font-size: 3vmin;
  color: var(--color-text);
}

/* Modal styles */
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

.modal-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: var(--second-shadow);
}

@media (max-width: 768px) {
  .presentation{
    flex-direction: column;
  }
  .gallery{
    padding: 0;
  }
  .heading{
    font-size: 24px;
  }
  .heading, .heading2{
    text-align: center;
  }
}
</style>
