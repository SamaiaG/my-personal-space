<template>
    <div class="horizontal-scroll-container">
      <div class="horizontal-scroll-wrapper">
        <img 
          v-for="(image, index) in prototypeImages" 
          :key="index" 
          :src="image" 
          class="prototype-image" 
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import projectsData from '/public/data/projects.json';
  import { useRoute } from 'vue-router';
  
  const props = defineProps({
    projectId: String,
  });
  
  const project = ref(null);
  const prototypeImages = ref([]);
  const modalOpen = ref(false);
  const route = useRoute();
  
  onMounted(() => {
    const projectId = props.projectId || route.params.projectId;
    project.value = projectsData.find((p) => p.projectId == projectId);
    if (project.value && project.value.prototypeImage) {
      prototypeImages.value = project.value.prototypeImage;
    }
  });

  </script>
  
  <style scoped>
  .horizontal-scroll-container {
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    padding: 1.66rem;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(69,73,106,1) 71%);
  }
  
  .horizontal-scroll-wrapper {
    display: flex;
    gap: 10px;
  }
  
  .prototype-image {
    height: 46vh;
    width: auto;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .prototype-image:hover {
    transform: scale(1.1);
  }

  </style>
  