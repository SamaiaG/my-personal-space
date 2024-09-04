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
      <img :src="projectImage" alt="project image" class="project-image" />  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import BaseSection from '@/components/BaseSection.vue'
  
  import image1 from '@/assets/images/projects_covers/thePickEntire.png'
  import image2 from '@/assets/images/projects_covers/teamAppEntire.png'

  const route = useRoute()
const projectTitle = ref('')
const projectDescription = ref('')
const projectImage = ref('')
const projectLink = ref('')

onMounted(() => {
  const projectId = route.params.projectId

  // Assuming data is fetched based on projectId
  const projectData = getProjectDetailsById(projectId)
  projectTitle.value = projectData.title
  projectDescription.value = projectData.description
  projectImage.value = projectData.imageSrc
  projectLink.value = projectData.Plink
})

function getProjectDetailsById(id) {
  const projects = [
    { id: '1', title: 'The Pick', description: 'This is a tool for making the choice-making easier. I have designed the page interface first with Figma, then later built it with Vue.js.', imageSrc: image1, Plink: '/' },
    { id: '2', title: 'Team App', description: 'This is a homepage design and build for a concept project – a chat application. I have designed the page first with Figma then later built a responsive page in Webflow.', imageSrc: image2, Plink: 'https://samaias-team-app.webflow.io/' },
  ]
  return projects.find(project => project.id === id) || {}
}
</script>
  

<style scoped>
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
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.3vmin;
  text-transform: uppercase;
}
.project-title {
  color: #393737;
  font-size: 8vmin;
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
  width: 80vmin;
  position: relative;
  top: -30vmin;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
}
</style>
