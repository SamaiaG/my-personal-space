<template>
    <div class="css-items">
      <h1 class="sec-title">My kind of therapy</h1>
      <p class="description">
        Here's a fun collection of my CSS illustrations! I create these whenever I'm feeling tired, using them as a 
        way to unwind. Some are inspired by other artists, while others come straight from my imagination or everyday life.
        Enjoy exploring my colorful creations! 🎨✨
      </p>

      <div class="gallery">
        <ProjectOverview 
      class="project" 
      v-for="project in projects" 
      :key="project.cssId" 
      :title="project.title" 
      :description='project.description' 
      :src="project.src" 
      :projectId="project.cssId"
      :link="project.link"
    ></ProjectOverview>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProjectOverview from '@/components/ProjectOverview.vue';


const projects = ref([]);

const fetchProjects = async () => {
  try {
    const response = await axios.get('data/cssfun.json');
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
.css-items {
  width: 100%;
  display: flex;
  flex-direction: column;
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
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
}

:deep(.item-container), :deep(.project-description) {
  padding: 1vmin;
}

@media (max-width: 1024px) {
  .gallery{
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}
@media (max-width: 768px) {
  .sec-title{
  font-size: 1.5rem;
}
  .description{
    font-size: 1.2rem;
  }
  .css-items {
  padding: 1.66rem  ;
}
}

</style>
