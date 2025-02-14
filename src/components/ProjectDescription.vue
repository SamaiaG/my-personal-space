<template>
  <div
    class="project-description"
    :style="index % 2 === 0 ? regularBackground : reversedBackground"
    :class="{ 'reverse-layout': index % 2 === 1 }"
  >
    <div class="left-part">
      <img :src="isMobile ? imageMobile : imageSrc"  alt="project image" class="project-image" />
    </div>
    <div class="right-part">
      <RouterLink 
        :to="{ name: 'projectComponent', params: { projectId: projectId } }" 
        class="title"
      >
        {{ title }}
      </RouterLink>
      <div class="tags">
        <div 
          v-for="(tag, tagIndex) in tags" 
          :key="tagIndex" 
          class="tag"
        >
          {{ tag }}
        </div>
      </div>
      <p class="description">
        {{ shortDescription}}
      </p>
      <div class="see-project">
        <RouterLink 
          :to="{ name: 'projectComponent', params: { projectId: projectId } }" 
          class="h-link"
        >
          See this project
        </RouterLink> 
        <SmallArrow /> 
      </div>
    </div>  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SmallArrow from './SmallArrow.vue';

const props = defineProps({
  title: String,
  shortDescription: String,
  tags: Array,
  imageSrc: String,
  imageMobile: String,
  projectId: String,
  index: Number,
});

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

const regularBackground = {
  background: "linear-gradient(294deg, rgba(255,255,255,1) 40%, rgba(69,73,106,1) 100%)",
};

const reversedBackground = {
  background: "linear-gradient(90deg, rgba(255,255,255,1) 40%, rgba(69,73,106,1) 100%)",
};
</script>

<style scoped>
.project-description {
  position: relative; 
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  padding: 1.66rem;
  gap: 5%;
  z-index: 0; 
}

.left-part,
.right-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vmin;
  width: 50%;
}

.left-part {
  align-items: center;
}
.reverse-layout {
  flex-direction: row-reverse;
}

.reverse-layout .left-part {
  align-items: center; 
  width: 50%;
}

.reverse-layout .right-part {
  align-items: start; 
}

.title {
  font-size: 4vmin;
  color: var(--primary-blue);
  font-family: 'Barlow', sans-serif;
  text-decoration: none;
}

.title:hover {
  font-weight: 500;
}

.tag {
  background-color: var(--accent-peach);
  backdrop-filter: blur(10px);
  padding: 0.5vmin 1vmin;
  color: var(--primary-blue);
  font-size: 1.3vmin;
  font-weight: 500;
}

.tags {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1vmin;
}

.description {
  color: var(--text-charcoal);
  font-size: 1.7vmin;
  font-family: 'Nunito', sans-serif;
}

.project-image {
  width: 70%;
  margin-right: 1vmin;
  filter: drop-shadow(8px 8px 4px rgba(17, 12, 46, 0.2));
}

.see-project {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4vmin;
}

.h-link {
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.7vmin;
}

.h-link:hover {
  text-shadow: 3px 0px 0px var(--accent-peach);
  transition: all 0.3s ease;
  cursor: pointer;
}

@media (max-width: 768px) {
  .project-description{
    height: auto;
  }
  .tag {
    display: none;
  }
  .project-image {
    width: 100%;
  }
  .title{
    font-size: 1.5rem;
  }
  .description, .h-link{
    font-size: 0.8rem;
  }
}
</style>
