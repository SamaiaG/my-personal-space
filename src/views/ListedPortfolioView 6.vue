<template>
  <BaseSection class="projects">
    <h1>Some projects</h1>
    <div class="bd-example">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="d-block w-100"
              alt="First slide [800x400]"
              src="@/assets/images/projects_covers/cover1.png"
              data-holder-rendered="true"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              alt="Second slide [800x400]"
              src="@/assets/images/projects_covers/cover2.png"
              data-holder-rendered="true"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              alt="Third slide [800x400]"
              src="@/assets/images/projects_covers/cover3.png"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <button class="carousel-control-prev" href="#" role="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" href="#" role="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <RouterLink to="/projects" class="h-link">see more projects...</RouterLink>
  </BaseSection>
  <BaseSection class="css-projects">
    <h1>Some CSS Fun</h1>
    <div class="bd-example">
      <div id="carouselExampleIndicatorsCSS" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item">
            <iframe
              class="d-block w-100"
              alt="First slide [800x400]"
              src="https://samaiag.github.io/css-fun/girl/index.html"
              title="me"
              data-holder-rendered="true"
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              class="d-block w-100"
              alt="Second slide [800x400]"
              src="https://samaiag.github.io/css-fun/flower%20pot/index.html"
              title="girl"
              data-holder-rendered="true"
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              class="d-block w-100"
              alt="Third slide [800x400]"
              src="https://samaiag.github.io/css-fun/anxiety/index.html"
              title="girl"
              data-holder-rendered="true"
            ></iframe>
          </div>
        </div>
        <button class="carousel-control-prev" href="#" role="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" href="#" role="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <RouterLink to="/cssfun" class="h-link">see more css fun tries...</RouterLink>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const carousel = document.getElementById('carouselExampleIndicators')
  const carouselCSS = document.getElementById('carouselExampleIndicatorsCSS')

  const items = carousel.querySelectorAll('.carousel-item')
  const itemsCSS = carouselCSS.querySelectorAll('.carousel-item')

  let currentIndex = 0
  let currentIndexCSS = 0

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index)
    })
  }
  function showSlideCSS(index) {
    itemsCSS.forEach((item, i) => {
      item.classList.toggle('active', i === index)
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length
    showSlide(currentIndex)
  }
  function nextSlideCSS() {
    currentIndexCSS = (currentIndexCSS + 1) % itemsCSS.length
    showSlideCSS(currentIndexCSS)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length
    showSlide(currentIndex)
  }
  function prevSlideCSS() {
    currentIndexCSS = (currentIndexCSS - 1 + itemsCSS.length) % itemsCSS.length
    showSlideCSS(currentIndexCSS)
  }

  carousel.querySelector('.carousel-control-next').addEventListener('click', nextSlide)
  carousel.querySelector('.carousel-control-prev').addEventListener('click', prevSlide)

  carouselCSS.querySelector('.carousel-control-next').addEventListener('click', nextSlideCSS)
  carouselCSS.querySelector('.carousel-control-prev').addEventListener('click', prevSlideCSS)

  // Initialize the first slide as active
  showSlide(0)
  showSlideCSS(0)
})
</script>

<style scoped>
.carousel-item {
  display: none;
}
.carousel-inner {
  width: 100vmin;
}

.carousel-item.active {
  display: block;
}
.d-block {
  height: 400px;
  width: 800px;
}
.carousel-inner {
  padding: 0 10vmin;
}
.carousel-control-prev-icon {
  background-image: url('@/assets/images/chevron-left.svg');
}
.carousel-control-next-icon {
  background-image: url('@/assets/images/chevron-right.svg');
}
.h-link {
  color: #f4a460;
  font-family: 'Raleway', sans-serif;
}
.h-link:hover {
  color: #f16529;
}
h1 {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1vmin;
}
</style>
