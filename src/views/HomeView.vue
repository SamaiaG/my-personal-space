<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-top">
        <div class="left-part">
          <h1 class="title">Hi and welcome!</h1>
          <p class="description">
            I am Samaia - a <em>Junior UX/UI Designer</em>, and this is the place I created to put the things together.
          </p>
          <div class="nav">
            <RouterLink to="/portfolio" class="nav-link">Projects</RouterLink> +
            <RouterLink to="/cssfun" class="nav-link">Fun</RouterLink> +
            <RouterLink to="/about" class="nav-link">About me</RouterLink>
          </div>
        </div>
        <div class="right-part">
          <iframe src="https://samaiag.github.io/css-fun/girl/index.html" title="girl" class="me"></iframe>
        </div>
        <div class="nav-mobile">
            <RouterLink to="/portfolio" class="nav-link">Projects</RouterLink> +
            <RouterLink to="/cssfun" class="nav-link">Fun</RouterLink> +
            <RouterLink to="/about" class="nav-link">About me</RouterLink>
          </div>
        <ArrowComponent @scrollToSection="scrollToSecondSection" class="arrow"/>
      </div>
    </div>

    <div class="second-section" ref="secondSection">

      <div v-for="(project, index) in projects.slice(0, 3)" class="project-item">
 
  <ProjectDescription
    :title="project.title"
    :shortDescription="project.shortDescription"
    :tags="project.projectTags"
    :imageSrc="project.imageSrc3"
    :imageMobile="project.imageMobile"
    :projectId="project.projectId"
    :index="index"
    class="project-description"
  />
</div>
  
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectDescription from '@/components/ProjectDescription.vue';
import ArrowComponent from '../components/ArrowComponent.vue';
import axios from 'axios';

const showInfoPopup = ref(false);

const projects = ref([]);
const secondSection = ref(null)

const fetchProjects = async () => {
  try {
    const response = await axios.get('data/projects.json');
    projects.value = response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
};

const checkInfoPopup = () => {
  const hasSeenPopup = localStorage.getItem('infoPopupSeen');
  showInfoPopup.value = !hasSeenPopup;
};

const scrollToSecondSection = () => {
  const sectionElement = secondSection.value?.$el || secondSection.value
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error('Second section not found')
  }
}

onMounted(() => {
  checkInfoPopup();
  fetchProjects();
});
</script>


<style scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16vmin;
}


.hero-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
}

.hero-top{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
}

.left-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 2vmin;
}

.right-part {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.nav {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2vw;
  color: var(--accent-peach);
  margin-top: 2vmin;
}
.nav-mobile{
  display: none;
}

.title{
  font-size: 4vw;
}
.description{
  font-size: 1.5vw;
}

.nav-link {
  color:  var(--text-charcoal);
  text-decoration: none;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(250,214,214,1) 81%);
  font-size: 1.5vw;
  cursor: pointer;
  padding:0!important;
}

.nav-link:hover {
  text-decoration: none;
  color:  var(--text-charcoal);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(197,212,234,1) 81%);
  transition: all 0.3s ease;
} 

.second-section{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.me{
  width: 100%;
  height: 100%;
  border: none;
}

.project-item {
  position: relative; 
  width: 100%; 
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8vmin 0;
  overflow: hidden; 
}
.arrow{
  display: block;
}

@media (max-width: 768px) {
  .home{
    padding: 1.66rem 0;
  }
  .hero-section{
    padding: 0 1.66rem ;
  }
  .hero-top{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-part{
    width: 90%;
  }
  .title{
    font-size: 8vw;
  }
  .description{
    font-size: 1rem;
  }
  .nav{
    display: none;
  }
  .nav-link{
    font-size: 1.6rem;
  }
  .nav-mobile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--accent-peach);
  }
  .right-part{
    width: 90%;
    height: 100%;
  }

  .arrow{
  display: none;
}
}
</style>
