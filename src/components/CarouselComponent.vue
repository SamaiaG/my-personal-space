<template>
    <div :id="carouselId" class="carousel slide">
      <div class="carousel-indicators">
        <button v-for="(slide, index) in slides" :key="`indicator-${index}`"
                type="button" :data-bs-target="`#${carouselId}`"
                :data-bs-slide-to="index" :class="{ active: index === 0 }"
                :aria-label="`Slide ${index + 1}`" :aria-current="index === 0">
        </button>
      </div>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="`slide-${index}`"
             class="carousel-item" :class="{ active: index === 0 }">
          <template v-if="slide.type === 'image'">
            <img :src="slide.imageSrc" class="carousel-image d-block w-100" :alt="slide.title">
          </template>
          <template v-else-if="slide.type === 'iframe'">
            <iframe :src="slide.imageSrc" class="carousel-iframe"  :title="slide.title"></iframe>
          </template>
          <div class="carousel-caption ">
            <h5 class="title">{{ slide.title }}</h5>
            <p class="description">{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    carouselId: String,
    slides: Array
  });
  </script>

<style scoped>
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
 iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-caption{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.5vmin;
}
.carousel-item{
    width: 55vw;
    height: 50vh;
}
.carousel-indicators{
    margin-bottom: 0
}
.title{
    font-size: 2vmin;
}
.description{
    display: block;
    font-size: 1.5vmin;
}

@media (max-width: 768px) {
    .carousel-item {
    width: 100vw;
    height: 35vh;
}
.description{
    display: none;
}
.title{
    font-size: 18px;
    margin-bottom: 3vmin;
}
}
</style>