<template>
  <div class="listed-portfolio">
  <BaseSection class="projects">
    <h1 class="sec-title">Some Projects</h1>
    <div class="bd-example">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="d-block project-image"
              alt="First slide [800x400]"
              src="/project_cover/thepickCard.png"
              data-holder-rendered="true"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block project-image"
              alt="Second slide [800x400]"
              src="/project_cover/teamappCard.png"
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
    <BaseButton class="see-more">
    <RouterLink to="/allprojects" class="h-link">see all... </RouterLink></BaseButton>
  </BaseSection>

  <BaseSection class="css-projects">
    <h1 class="sec-title">CSS Fun Masterpieces</h1>
    <div class="bd-example">
      <div id="carouselExampleIndicatorsCSS" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item">
            <iframe
              class="d-block"
              alt="First slide [800x400]"
              src="https://samaiag.github.io/css-fun/duolingoavatar/index.html"
              title="me"
              data-holder-rendered="true"
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              class="css-frame d-block"
              alt="Second slide [800x400]"
              src="https://samaiag.github.io/css-fun/flower%20pot/index.html"
              title="plant"
              data-holder-rendered="true"
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              class="css-frame d-block"
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
    <BaseButton class="see-more"><RouterLink to="/cssfun" class="h-link">see all...</RouterLink></BaseButton> 
  </BaseSection>
  <BaseBlob />
</div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseBlob from '@/components/BaseBlob.vue'
import BaseButton from '@/components/BaseButton.vue';
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
.sec-title{
  margin-bottom: 0;
  font-size: 4vmin;
  font-family: 'Raleway', sans-serif;
  color: #393737;
}

.carousel-inner {
  padding: 0 10vmin;

}

:deep(.section){
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
:deep(.s-container){
  justify-content: center;
}
.carousel-item.active {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-block {
  height: 40vmin;
}

.carousel-control-prev-icon {
  background-image: url('@/assets/images/icons/chevron-left.svg');
}
.carousel-control-next-icon {
  background-image: url('@/assets/images/icons/chevron-right.svg');
}
.see-more{
  padding: 0.3vw 1vw 0.5vw 1vw;
}
.h-link{
  width: 100%;
  text-decoration: none;
  text-align: end;
  color:white
}
.h-link:hover {
  color:#E67E22
}
.see-more:hover .h-link {
  color: var(--color-primary-dark);
}

h1 {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1vmin;
}

@media (max-width: 768px) {
  .sec-title{
    font-size: 24px;
  }
 
}
iframe{
  background-color:#fffafa52;
  width: 72vmin;
}

</style>
