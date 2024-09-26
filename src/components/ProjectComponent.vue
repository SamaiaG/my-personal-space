<template>
  <div class="project-showcase">
    <BaseSection class="project-section">
      <h5 class="sub-tag">project showcase</h5>
      <h1 class="project-title">{{ projectTitle }}</h1>
      <p class="project-description">
        {{ projectDescription }}
      </p>
      <a :href="projectLink" class="h-link" target="_blank" rel="noopener noreferrer">
        see this project live
      </a>
    </BaseSection>
    <img :src="projectImage" alt="project image" class="project-image" />  
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BaseSection from '@/components/BaseSection.vue';

import image1 from '@/assets/images/projects_covers/thePickEntire.png';
import image2 from '@/assets/images/projects_covers/teamAppEntire.png';

const route = useRoute();
const projectTitle = ref('');
const projectDescription = ref('');
const projectImage = ref('');
const projectLink = ref(''); 

onMounted(() => {
  const projectId = route.params.projectId;

  const projectData = getProjectDetailsById(projectId);
  if (projectData) {
    projectTitle.value = projectData.title;
    projectDescription.value = projectData.description;
    projectImage.value = projectData.imageSrc;
    projectLink.value = projectData.projectLink;
  }
});

function getProjectDetailsById(id) {
  const projects = [
    {
      id: '1',
      title: 'The Pick',
      description: "'The Pick' is a decision-making tool designed to simplify the process of making tough choices. Inspired by the challenge of picking a gift for someone special, the tool allows users to input options, fill in relevant details, and at the end, it randomly selects a decision. Developed using Vue.js for functionality and designed with Figma for a clean, user-friendly interface, 'The Pick' offers an effortless solution for those moments when you can't make up your mind.",
      imageSrc: image1,
      projectLink: 'https://samaiag.github.io/the-pick/',  
    },
    {
      id: '2',
      title: 'Team App',
      description: 'This is a homepage design and build for a concept project – a chat application. I have designed the page first with Figma then later built a responsive page in Webflow.',
      imageSrc: image2,
      projectLink: 'https://samaias-team-app.webflow.io/', 
    },
  ];
  return projects.find(project => project.id === id) || {};
}

</script>
  

<style scoped>
:deep(.s-container){
  gap: 4vw;
}
.project-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-section {
  height: 80vh !important;
}
.sub-tag {
  color: rgb(0, 0, 0, 0.35);
  letter-spacing: 0.3vmin;
  text-transform: uppercase;
  font-size: 1.5vmin;
}
.project-title {
  color: #393737;
  font-size: 4vmin;
  font-weight: 200;
}
.project-description {
  text-align: center;
}
 .h-link {
  text-decoration: none;
  color: black;
  font-weight: 600;
  background: linear-gradient(0deg, rgba(255, 232, 114, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.project-image {
  width: 50vw;
  max-width: 70vw;
  position: relative;
  top: -25vh;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  margin-bottom: -20vh;
  z-index: 9;
  border-radius: 5px;
  object-fit: cover;
}
@media (max-width: 1024px) {

.project-image {
  top: -20vh;
  margin-bottom: -10vh;
  width: 90vw;
}

  }
  @media (max-width: 768px){
    .project-section {
    height: 50vh !important;
}
    .project-title {
      font-size: 32px;
    }
    .project-description {
      font-size: 12px;
    }
    .h-link {
      font-size: 10px;
    }
    .project-image {
  width: 90vw;
  top: -4vh;
  margin-bottom: -5vh;
}
}
</style>
