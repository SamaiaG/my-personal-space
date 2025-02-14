<template>
  <div class="listed-portfolio">
    <h1 class="sec-title">My projects</h1>
    <p class="description">
      From research to design, see how I approach user-centered solutions that bring ideas to life
    </p>
    <div v-for="(project, index) in projects.slice(0, 3)" :key="index" class="project-item">
      <ProjectDescription
        :title="project.title"
        :shortDescription="project.shortDescription"
        :tags="project.projectTags"
        :imageSrc="project.imageSrc3"
        :imageMobile="project.imageMobile"
        :projectId="project.projectId"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectDescription from '@/components/ProjectDescription.vue';
import axios from 'axios';

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
.listed-portfolio{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vmin;
  padding: 5vmin  16vmin 0 16vmin;
}
.sec-title, .description{
  width: 100%;
  display: flex;
  justify-content: start;
}
.sec-title{
  font-size: 3vmin;
}
.project-item {
  position: relative; 
  width: 100%; 
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .listed-portfolio{
    padding: 1.66rem 0;
  }
  .sec-title, .description{
    padding: 0 1.66rem;
  }
  .sec-title{
  font-size: 1.5rem;
}
  .description{
    font-size: 1.2rem;
  }
}
</style>
