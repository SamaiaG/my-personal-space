<template>
  <div class="css-art">
    <BaseSection class="first-css-section">
      <div class="presentation">
        <div class="about-me">
          <h1 class="heading">This is me,</h1>
          <h3 class="heading2">and below is my kind of therapy.</h3>
        </div>
        <iframe src="https://samaiag.github.io/css-fun/duolingoavatar/index.html" title="girl" class="me"></iframe>
      </div>
    </BaseSection>
    <div class="css-items">
      <p class="description">
        Here's a fun collection of my CSS illustrations! I create these whenever
        I'm feeling tired, using them as a way to unwind. Some are inspired by
        other artists, while others come straight from my imagination or
        everyday life. It's a great way for me to relax and have fun with
        coding! Enjoy exploring my colorful creations!
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
    ></ProjectOverview>
      </div>
    </div>
    <BaseBlob />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProjectOverview from '@/components/ProjectOverview.vue';
import BaseBlob from '@/components/BaseBlob.vue';
import BaseSection from '@/components/BaseSection.vue';

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
iframe {
  border: none;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: var(--second-shadow);
}

.css-items {
  padding: 2vmin 16vmin;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}


.presentation {
  display: flex;
  gap: 3vmin;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.1vmin;
}
.me {
  width: 55vmin;
  height: 45vmin;
  box-shadow: none;
  margin: -5vmin;
}

.heading{
  font-size: 4vmin;
  color: var(--color-text);
}
.heading2{
  font-size: 3vmin;
  color: var(--color-text);
}

:deep(.item-container){
  padding: 1vmin;
}


@media (max-width: 768px) {
  .presentation{
    flex-direction: column;
  }
  .gallery{
    padding: 0;
  }
  .heading{
    font-size: 24px;
  }
  .heading, .heading2{
    text-align: center;
  }
}
</style>
