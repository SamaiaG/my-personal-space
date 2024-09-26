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
            <h5> 
                <RouterLink 
                    v-if="slide.type === 'image'" 
                    :to="{ name: 'projectComponent', params: { projectId: slide.projectId } }" 
                    class="title" >
                        {{ slide.title }}
                </RouterLink>
                <span 
                    v-if="slide.type === 'iframe'" 
                    class="title" >
                    {{ slide.title }}
                </span>
            </h5>      
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
img,  iframe{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  object-position: left;
}

.slide{
   background-color: rgba(255, 255, 255);
   padding: 1vmin;
   box-shadow: var(--first-shadow);
   border-radius: 10px;
   width: 70%;
}

.carousel-inner{
    width: 100%;
    height: 60vh;
}

.carousel-caption{
    width: 100%;
    background-color:  rgba(255, 255, 255);
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.5vmin;
}
.carousel-item{
    height: 100%;
}
.carousel-indicators{
    margin-bottom: 0;
}
.carousel-indicators button{
  background-color: #E67E22;
}

.title{
    font-size: 2vmin;
    color: var(--color-text);
    text-decoration: none;
}
.title:hover{
    font-weight:800;
    color: var(--color-primary);
}

.carousel-control-prev, .carousel-control-next{
  opacity: 0.1;
  width: 10%;
}
.carousel-control-prev-icon {
  background-image: url('@/assets/images/icons/chevron-left.svg');
}
.carousel-control-next-icon {
  background-image: url('@/assets/images/icons/chevron-right.svg');
}
@media (max-width: 768px) {
  
  .carousel{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }
.title{
    font-size: 18px;
    margin-bottom: 3vmin;
    line-height: 2;
}
.carousel-inner{
    height: 45vh;
    width: 100%;
}
.carousel-item{
    height: 100%;
}
.slide{
  width: 100%;
}
}
</style>