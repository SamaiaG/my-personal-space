<template>
    <div class="gallery-container">
      <div class="gallery-grid">
        <div class="main-i">
        <img 
          :src="getImageUrl(mainImage)" 
          alt="Main image" 
          class="main-image framed-image" 
        />
        </div>
       
        <!-- First scrollable row -->
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
  
        <!-- Second scrollable row -->
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
  import { ref, computed } from 'vue';
  
  const images = ref([
    'image1.png', // First image (main)
    'image2.png', 'image3.png', 'image4.png', 'image5.png', 
    'image6.png', 'image7.png', 'image8.png', 'image9.png', 
    'image10.png', 'image11.png', 'image12.png', 'image13.png',
    'image14.png', 'image15.png', 'image16.png', 'image17.png', 
    'image18.png', 'image19.png', 'image20.png', 'image21.png'
  ]);
  
  const mainImage = ref(images.value[0]); // Store the main image separately
  
  const firstRowImages = computed(() => images.value.slice(1, 11)); // First row (10 images)
  const secondRowImages = computed(() => images.value.slice(11));  // Second row (10 images)
  
  const getImageUrl = (image) => {
    return new URL(`../assets/images/galleryPhotos/${image}`, import.meta.url).href;
  };
  
  // Function to swap the clicked image with the main image
  const swapImage = (index, row) => {
    const imageArray = row === 'firstRow' ? firstRowImages.value : secondRowImages.value;
    
    // Get the clicked image
    const clickedImage = imageArray[index];
  
    // Find the index of the clicked image in the main list
    const clickedImageIndex = images.value.indexOf(clickedImage);
    const mainImageIndex = images.value.indexOf(mainImage.value);
  
    // Swap images in the array
    if (clickedImageIndex !== -1 && mainImageIndex !== -1) {
      [images.value[mainImageIndex], images.value[clickedImageIndex]] = 
      [images.value[clickedImageIndex], images.value[mainImageIndex]];
      
      // Update main image
      mainImage.value = clickedImage;
    }
  };
  </script>
  
  <style>
.gallery-grid {
  display: grid;
  grid-template-columns: minmax(20vmin, 1fr) 3fr; 
  grid-template-rows: auto auto;
  gap: 1vmin;
  width: 100%;
}

.main-i{
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
  aspect-ratio: 1/1; /* ensures square shape */
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
.sc1{
    align-items: end;
}
.sc2{
    align-items: start;
}

.scroll-content {
  display: flex;
  width: max-content;
}

.scroll-container:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.scroll-container:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
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
  aspect-ratio: 1/1; /* Forces square shape */
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
}
  </style>
