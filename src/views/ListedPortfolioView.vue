<template>
  <div class="listed-portfolio">
  <BaseSection class="projects">
    <h1>Some projects</h1>
    <div class="bd-example">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="d-block project-image w-100"
              alt="First slide [800x400]"
              src="@/assets/images/projects_covers/coverpro1.png"
              data-holder-rendered="true"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block project-image w-100"
              alt="Second slide [800x400]"
              src="@/assets/images/projects_covers/coverpro2.png"
              data-holder-rendered="true"
            />
          </div>
          <div class="carousel-item">
              <img
              class="d-block project-image see-more  w-100"
              alt="More slide [800x400]"
              src="@/assets/images/projects_covers/coverpro2.png"              title="cake"
              data-holder-rendered="true"
            ></img>
            <button class="see-more-btn"><RouterLink to="/cssfun" class="h-link">see all projects...</RouterLink>
            </button>
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
          <div class="carousel-item">
              <iframe
              class="d-block see-more  w-100"
              alt="Fourth slide [800x400]"
              src="https://samaiag.github.io/css-fun/backing/index.html"
              title="cake"
              data-holder-rendered="true"
            ></iframe>
            <button class="see-more-btn"><RouterLink to="/cssfun" class="h-link">see more css fun tries...</RouterLink>
            </button>
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
  </BaseSection>
  <BaseBlob />
</div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseBlob from '@/components/BaseBlob.vue'
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
  height: 35vmin;
  width: 90vmin;
}
.carousel-inner {
  padding: 0 10vmin;
}
.carousel-control-prev-icon {
  background-image: url('@/assets/images/icons/chevron-left.svg');
}
.carousel-control-next-icon {
  background-image: url('@/assets/images/icons/chevron-right.svg');
}
.h-link {
  color: #595c62;
  text-decoration: none;
  font-size: 4vmin;
}

.see-more-btn{
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 14vmin;
  background: none;
  border: none;
  padding: 1vmin 3vmin;
width: 100%;
}
.h-link:hover {
  color: #424448;
}
h1 {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1vmin;
}
.see-more{
filter: blur(6px);
opacity: 0.5;
display: flex!important;
justify-content: center;
align-items: center;

}
.project-image{
  object-fit: content!important;
}
</style>
