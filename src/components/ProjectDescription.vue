<template>
  <div class="project-description">
    <div class="right-part">
      <p class="sub-tag">LATEST WORK</p>
      <h1>{{ title }}</h1>
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="index" :class="['tag', `t${index + 1}`]">
          {{ tag }}
        </div>
      </div>
      <p class="description">
        {{ description }}
      </p>
      <BaseButton class="see-project">
        <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="h-link">see this project
        </RouterLink>
      </BaseButton>
    </div>
    <div class="left-part">
      <img :src="imageSrc" alt="project image" class="project-image" />
    </div>
  </div>
</template>


<script setup>
import BaseButton from '@/components/BaseButton.vue'

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  imageSrc: String,
  projectLink: String,
  projectId: String
})
</script>


<style scoped>
.project-description {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5vmin 0;
}
.right-part {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3vmin;
}

.sub-tag {
  font-size: 1.5vmin;
  color: #393737;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
}
h1 {
  font-size: 4vmin;
  color: #393737;
  font-family: 'Raleway', sans-serif;
}
.tag {
  background-color: #f9efe7;
  padding: 0.8vmin 2vmin;
  color: black;
  font-size: 1.5vmin;
}
.tags {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1vmin;
}
.description {
  color: black;
  font-size: 2vmin;
}
.project-image {
  width: 60vmin;
}
.see-project {
  width: 30vmin !important;
  padding: 2vmin 4vmin !important;
  background: rgb(230, 126, 34);
  background: linear-gradient(158deg, rgba(230, 126, 34, 0.8) 24%, rgba(226, 156, 95, 0.8) 100%);
}
.h-link {
  color: white;
  text-decoration: none;
}
.h-link:hover {
  text-decoration: underline;
}
</style>
