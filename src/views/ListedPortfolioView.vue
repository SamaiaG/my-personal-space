<template>
  <div class="listed-portfolio">
  <BaseSection class="projects">
    <h1 class="sec-title">Some Projects</h1>
    <CarouselComponent 
    carouselId="projectsCarousel"
    :slides="slides"  />
    <BaseButton class="see-more">
    <RouterLink to="/allprojects" class="h-link">see all... </RouterLink></BaseButton>
  </BaseSection>

  <BaseSection class="css-projects">
    <h1 class="sec-title">CSS Fun Masterpieces</h1>
    <CarouselComponent 
    carouselId="carouselCSS"
    :slides="cssSlides" />
    <BaseButton class="see-more"><RouterLink to="/cssfun" class="h-link">see all...</RouterLink></BaseButton> 
  </BaseSection>
  <BaseBlob />
</div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue';
import BaseBlob from '@/components/BaseBlob.vue';
import BaseButton from '@/components/BaseButton.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const slides = ref([]);
const cssSlides = ref([]);

const fetchProjects = async () => {
  try {
    const response = await axios.get('data/projects.json');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

const fetchCssProjects = async () => {
  try {
    const response = await axios.get('data/cssfun.json');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

const transformProjectsToSlides = (projects) => {
  return projects.map(project => ({
    title: project.title,
    description: project.description,
    imageSrc: project.imageSrc,
    type: 'image',
    projectId: project.projectId
  }));
};

const transformCssProjectsToSlides = (projects) => {
  return projects.map(project => ({
    title: project.title,
    description: project.description,
    imageSrc: project.src,
    type: 'iframe',
    projectId: project.cssId
  }));
};

onMounted(async () => {
    const projects = await fetchProjects();
    const cssProjects = await fetchCssProjects();
    slides.value = transformProjectsToSlides(projects);
    cssSlides.value = transformCssProjectsToSlides(cssProjects);
});
</script>


<style scoped>
.sec-title{
  margin-bottom: 0;
  font-size: 4vmin;
  color: #393737;
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


@media (max-width: 768px) {
  .sec-title{
    font-size: 24px;
  }
 
}
</style>
