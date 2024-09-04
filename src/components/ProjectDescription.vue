<template>
  <div class="project-description">
    <div class="left-part">
      <p class="sub-tag">LATEST WORK</p>
      <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="title">{{title}}</RouterLink>
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="index" :class="['tag', `t${index + 1}`]">
          {{ tag }}
        </div>
      </div>
      <p class="description">
        {{ description }}
      </p>
    </div>
    <div class="right-part">
      <img :src="imageSrc" alt="project image" class="project-image" />
    </div>
    <BaseButton class="see-project">
        <RouterLink :to="{ name: 'projectComponent', params: { projectId: projectId } }" class="h-link">see this project...</RouterLink>
    </BaseButton>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5vmin 0;
  align-items: center;
  gap: 5vmin;
}
.left-part {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 3vmin;
}
.right-part{
  grid-column: 2/3;
  grid-row: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 4vmin;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
}
.title:hover{
  font-weight: 700;
}
.tag {
  background-color: #f9efe7;
  opacity: 0.8;
  backdrop-filter: blur(10px) ;
  padding: 0.5vmin 1vmin;
  color: #393737;
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
  height: 40vw;
  filter: drop-shadow(8px 8px 4px rgba(17, 12, 46, 0.2));
}
.see-project {
  grid-column: 1/2;
  grid-row: 2/3;
  width: 25vmin;
  padding: 1vmin 4vmin !important;
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
.sub-tag {
  font-size: 1.5vmin;
  color: #393737;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  align-self: self-start;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .project-description {
   display: flex;
   flex-direction: column;
   gap: 4vmin
  }
  .left-part {
    align-items: center;
    gap: 4vmin
  }

.see-project{
  font-size: 12px;
  padding: 0.5vmin 1.5vmin !important;
  margin: 6vmin; 
  align-self: end; 
  background: transparent;
  width: auto
}
.h-link{
  color: rgb(230, 126, 34);
  font-weight: 600;
}
.tags {
  justify-content: center;
}
.tag{
  font-size: 2vmin;
  padding: 1vmin 2vmin;
}
.title {
  font-size: 28px;
}
.description{
  font-size: 16px;
  text-align: center;
}
.project-image {
  height: 70vw;
}
}
</style>
