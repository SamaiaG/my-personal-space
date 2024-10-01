<template>
<div class="home">
  <BaseSection class="hero-section">
    <div class="hero-container">
    <div class="hero-intro">
      <div class="left-part">
        <h1 class="title">Hi and welcome!</h1>
        <p class="description">
          I am Samaia - a newbie developer, and this is
          the place I created to put the things together.
        </p>
      </div>
      <div class="right-part">    
        <iframe src="https://samaiag.github.io/css-fun/girlorangebg/index.html" title="girl" class="me"></iframe>
      </div>
      <div class="buttons">
        <BaseButton @click="toggleAboutView" class="about">get to know me better</BaseButton>
        <BaseButton @click="toggleSkillsView" class="skills">see my learning journey</BaseButton>
      </div>
    </div>
  </div>
  </BaseSection>

  <BaseSection class="second-section">
    <div class="latest-work">

    <ProjectDescription
    class="project-description"
    v-for="project in projects.slice(0, 2)"
    :key="project.title"
      :title=project.title
      :description=project.description
      :tags=project.projectTags
      :imageSrc=project.imageSrc3
      :projectId=project.projectId />

    <div class="carousel">
    <p class="sub-tag">LATEST WORK</p>
    <CarouselComponent 
    carouselId="projectsCarousel"
    :slides="slides"  />
  </div>
    <BaseButton class="more-projects">
      <RouterLink to="/portfolio" class="h-link">see more projects</RouterLink>
    </BaseButton>
  </div>
  </BaseSection>

  <BasePopup @close="closePopup" v-show="isAboutViewVisible" >
    <AboutView class="popup-section"/>
  </BasePopup>
  <BasePopup @close="closePopup" v-show="isSkillsViewVisible">
    <SkillsView class="popup-section"/>
  </BasePopup>

<InfoPopup @close="handlePopupClose" v-if="showInfoPopup">
  <div class="info-popup">
    <p class="info-text">Welcome!<br> This site is still being developed and updated regularly.</p>
  </div>  
</InfoPopup>

  <ContactView class="contact" />
  <BaseBlob class="the-blobs" />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import AboutView from './AboutView.vue'
import SkillsView from './SkillsView.vue'
import BasePopup from '@/components/BasePopup.vue'
import ContactView from './ContactView.vue'
import BaseBlob from '@/components/BaseBlob.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import InfoPopup from '@/components/InfoPopup.vue'

import axios from 'axios'

const isAboutViewVisible = ref(false)
const isSkillsViewVisible = ref(false)
const showInfoPopup = ref(false)

const slides = ref([])
const projects = ref([])

const toggleAboutView = () => {
  isAboutViewVisible.value = !isAboutViewVisible.value
}
const toggleSkillsView = () => {
  isSkillsViewVisible.value = !isSkillsViewVisible.value
}

const closePopup = () => {
  isAboutViewVisible.value = false
  isSkillsViewVisible.value = false
}

const fetchProjects = async () => {
  try {
    const response = await axios.get('data/projects.json');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};
const fetchProjects2 = async () => {
  try {
    const response = await axios.get('data/projects.json');
    projects.value = response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
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


const handlePopupClose = () => {
  showInfoPopup.value = false
  localStorage.setItem('infoPopupSeen', 'true') 
}

const checkInfoPopup = () => {
  const hasSeenPopup = localStorage.getItem('infoPopupSeen')
  showInfoPopup.value = !hasSeenPopup
}


onMounted(async () => {
  checkInfoPopup(); // Check for the info popup on component mount
  
    const projects = await fetchProjects();
    slides.value = transformProjectsToSlides(projects);
    fetchProjects2();
});


</script>

<style scoped>
.hero-container{
  width: 90%;
}
.hero-intro {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: auto;
  width: 100%;
  gap: 2%;
}

.left-part {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;
  padding-bottom:2vw ;
}

.right-part {
  grid-column: 2/3;
  grid-row: 1/3;
  height: 70vh;
}
.buttons {
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 2vw;
}

.title, .description {
  padding-bottom:2vw ;
}

.title{
  font-size: 4vw;
}
.description{
  font-size: 1.5vw;
}

.h-link {
  color: var(--color-primary);
  text-decoration: none;
}

.h-link:hover {
  text-decoration: underline;
  color: var(--color-primary-dark);
}

.more-projects {
  background: var(--color-primary);
}
.more-projects:hover {
  background: white;
}
.more-projects .h-link{
  color: white;
}
.more-projects:hover .h-link {
  color: var(--color-primary-dark);
}
.me {
  width: 100%;
  height:100%;
}

.sub-tag {
  color: rgb(0, 0, 0, 0.35);
  letter-spacing: 0.3vmin;
  text-transform: uppercase;
  font-size: 1.5vmin;
}
.latest-work{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vmin 0;
  gap: 20px;
}
.carousel{
  display: none;
}

:deep(.contactForm) {
  display: none !important;
}
:deep(.contactContainer) {
  flex-direction: row !important;
  margin-bottom: none;
}
:deep(.popup-section>.section){
  padding: 6vmin 7%;
}
.info-text{
  color: var(--color-text);
  font-size: 2vmin;
  text-align: center;
}
@media (max-width: 1024px) {
  .hero-intro {
    padding: 1vw;
  }
  .right-part{
    height: auto;
  }
  .me{
    height:100%;
  }
  :deep(.popup){
    width: 95% !important;
    padding: 0;
    max-height: 95vh;
  }
  .info-text{
  font-size: 14px;
}
}

@media (max-width: 768px) {
  :deep(.contactContainer) {
  flex-direction: column !important;
  margin-top: 3vmin
}
:deep(.contactTitle){
  font-size: 24px;
}
:deep(.contactMessage){
  font-size: 16px;
}
.hero-section {
  height: auto !important;
}

.hero-intro {
  display: flex;
  flex-direction: column;
  padding-top: 5vw;
  padding-left: 0;
  text-align: center;
  gap: 0;
}

.buttons{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px
}

.title{
  font-size: 32px;
  text-align: center;
}
.description {
  font-size: 16px;
  text-align: center;
}
.me{
  height: 45vh;
}
.project-description{
  display: none;
}
.carousel{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}
.sub-tag{
  font-size: 2.5vmin;
  align-self: center;
}
.second-section :deep(.s-container){
  align-items: stretch;
}
}
</style>
