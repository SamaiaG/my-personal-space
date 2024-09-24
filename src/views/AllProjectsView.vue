<template>
  <div class="all-projects">
    <ProjectOverview 
      class="project" 
      v-for="project in projects" 
      :key="project.title" 
      :title="project.title" 
      :description="project.description" 
      :imageSrc="project.imageSrc" 
      :projectId="project.projectId" 
      :lastUpdate="project.lastUpdate"
    ></ProjectOverview>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProjectOverview from '@/components/ProjectOverview.vue';

const projects = ref([]);

const fetchProjects = async () => {
  try {
    const response = await axios.get('data/projects.json');
    projects.value = response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
};

onMounted(() => {
  fetchProjects();
});
</script>



<style scoped>  
.all-projects {
 display: grid;
 grid-template-columns: 50% 50%;
 padding: 2vmin 16vmin;
}

@media (max-width: 1024px) {
  .all-projects {
    grid-template-columns: 100%;
  }
}
</style>