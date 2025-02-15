<template>
  <div class="gallery-container">
    <div v-if="isMobile" class="mobile-scroll-container">
      <div class="mobile-scroll-content">
        <img 
          v-for="(image, index) in images"
          :key="index"
          :src="getImageUrl(image)"
          alt="Gallery image"
          class="gallery-image framed-image"
          @click="swapImage(index)"
        />
      </div>
    </div>

    <div v-else class="gallery-grid">
      <div class="main-i">
        <img 
          :src="getImageUrl(mainImage)" 
          alt="Main image" 
          class="main-image framed-image" 
        />
      </div>

      <div class="scroll-container sc1">
        <div class="scroll-content">
          <img 
            v-for="(image, index) in firstRowImages"
            :key="index"
            :src="getImageUrl(image)"
            alt="Gallery image"
            class="gallery-image framed-image"
            @click="swapImage(index, 'firstRow')"
          />
        </div>
      </div>

      <div class="scroll-container sc2">
        <div class="scroll-content">
          <img 
            v-for="(image, index) in secondRowImages"
            :key="index"
            :src="getImageUrl(image)"
            alt="Gallery image"
            class="gallery-image framed-image"
            @click="swapImage(index, 'secondRow')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const images = ref([
  'image1.png', // First image (main)
  'image2.png', 'image3.png', 'image4.png', 'image5.png', 
  'image6.png', 'image7.png', 'image8.png', 'image9.png', 
  'image10.png', 'image11.png', 'image12.png', 'image13.png',
  'image14.png', 'image15.png', 'image16.png', 'image17.png', 
  'image18.png', 'image19.png', 'image20.png', 'image21.png'
]);

const mainImage = ref(images.value[0]);

const firstRowImages = computed(() => images.value.slice(1, 11));
const secondRowImages = computed(() => images.value.slice(11));

const getImageUrl = (image) => {
  return new URL(`../assets/images/galleryPhotos/${image}`, import.meta.url).href;
};

// Function to swap the clicked image with the main image
const swapImage = (index, row) => {
  if (isMobile.value) {
    [images.value[0], images.value[index]] = [images.value[index], images.value[0]];
    mainImage.value = images.value[0];
  } else {
    const imageArray = row === 'firstRow' ? firstRowImages.value : secondRowImages.value;
    const clickedImage = imageArray[index];
    const clickedImageIndex = images.value.indexOf(clickedImage);
    const mainImageIndex = images.value.indexOf(mainImage.value);

    if (clickedImageIndex !== -1 && mainImageIndex !== -1) {
      [images.value[mainImageIndex], images.value[clickedImageIndex]] = 
      [images.value[clickedImageIndex], images.value[mainImageIndex]];
      
      mainImage.value = clickedImage;
    }
  }
};

// Detect if screen is mobile
const isMobile = ref(window.innerWidth < 768);

const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style>
.gallery-container {
  width: 100%;
  overflow: hidden;
}

.gallery-grid {
  display: grid;
  grid-template-columns: minmax(20vmin, 1fr) 3fr; 
  grid-template-rows: auto auto;
  gap: 1vmin;
  width: 100%;
}

.main-i {
  grid-row: span 2;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
}

.main-image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.main-image:hover {
  transform: scale(1.02);
}

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  display: flex;
}
.sc1 {
  align-items: end;
}
.sc2 {
  align-items: start;
}

.scroll-content {
  display: flex;
  width: max-content;
}

.framed-image {
  background: white;
  padding: 1.2vmin;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin: 0.7vmin;
  border-radius: 0.2vmin;
}

.gallery-image {
  width: 18vmin;
  aspect-ratio: 1/1; 
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
}

/* Mobile view */
@media (max-width: 768px) {
  .gallery-grid {
    display: none;
  }

  .mobile-scroll-container {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    display: flex;
    padding: 1vmin 0;
  }

  .mobile-scroll-content {
    display: flex;
    gap: 0.7vmin;
    width: max-content;
  }

  .gallery-image {
    width: 32vmin;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .gallery-image:hover {
    transform: scale(1.05);
  }
}
</style>
