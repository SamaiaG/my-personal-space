<template>
  <div class="project-showcase">
    <BaseSection class="project-section">
      <h5 class="sub-tag">project showcase</h5>
      <h1 class="project-title">{{ projectTitle }}</h1>
      <p class="project-description">
        {{ projectDescription }}
      </p>
    <RouterLink :to="projectLink" class="h-link">see this project live
      </RouterLink>
      </BaseSection>
    <img :src="projectImage" alt="project image" class="project-image" />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import BaseSection from '@/components/BaseSection.vue'
  
  const route = useRoute()
  
  // Define reactive properties to hold project data
  const projectTitle = ref('')
  const projectDescription = ref('')
 const projectImage = ref('')
  const projectLink = ref('/')
  
  onMounted(() => {
  const projectId = route.params.projectId

  // Assuming data is fetched based on projectId
  const projectData = getProjectDetailsById(projectId)
  projectTitle.value = projectData.title
  projectDescription.value = projectData.description
  projectImage.value = projectData.imageSrc  
})

// Example function to simulate fetching project data
function getProjectDetailsById(id) {
  const projects = [
    { id: '1', title: 'Project 1', description: 'This is the first project', imageSrc:'thepickentire.png'  },
    { id: '2', title: 'Project 2', description: 'This is the second project', imageSrc: '/thepickentire.png' },
    // Add more projects as needed
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
 .h-link {
  text-decoration: none;
  color: black;
  font-weight: 600;
  background: linear-gradient(0deg, rgba(255, 232, 114, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.project-image {
  width: 120vmin;
  position: relative;
  top: -30vmin;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
}
</style>
