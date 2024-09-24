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
  color: var(--color-text);
  text-decoration: none;
}
.title:hover{
  font-weight: 500;
  color: var(--color-primary-dark);
}
.tag {
  background-color: #f9efe7;
  opacity: 0.8;
  backdrop-filter: blur(10px) ;
  padding: 0.5vmin 1vmin;
  color: var(--color-text);
  font-size: 1.5vmin;
  border-radius: 5px;
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
  margin-right: 1vmin;
  filter: drop-shadow(8px 8px 4px rgba(17, 12, 46, 0.2));
}
.see-project {
  grid-column: 1/2;
  grid-row: 2/3;
  width: 25vmin;
}
.h-link {
  color: white;
  text-decoration: none;
}
.h-link:hover {
  color: var(--color-primary);
}
.sub-tag {
  font-size: 1.5vmin;
  color: var(--color-text);
  font-weight: 400;
  align-self: self-start;
  margin-bottom: 0;
}

.see-project:hover .h-link {
  color: var(--color-primary-dark); /* Change to your desired hover color */
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
  box-shadow: none;
  width: auto
}
.h-link{
  color: var(--color-primary);
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
