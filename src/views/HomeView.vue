<template>
<div class="home">
  <BaseSection class="hero-section">
    <div class="hero-intro">
      <div class="left-part">
        <h1 class="title">Hi and welcome!</h1>
        <p class="description">
          I am Samaia - a newbie developer, and this is<br />
          the place I created to put the things together.
        </p>
      </div>
      <div class="right-part">    
        <iframe src="https://samaiag.github.io/css-fun/girl/index.html" title="girl" class="me"></iframe>
      </div>
      <div class="buttons">
        <BaseButton @click="toggleAboutView" class="about">get to know me better</BaseButton>
        <BaseButton @click="toggleSkillsView" class="skills">see my learning journey</BaseButton>
      </div>
    </div>
  </BaseSection>

  <BaseSection class="second-section">
    <ProjectDescription
      title="The Pick"
      description="This is a tool for making the choice-making easier."
      :tags="['Website Design', 'Figma', 'Web Development']"
      imageSrc="src/assets/images/thePick.jpg"
      projectId="1"/>
    <ProjectDescription
      title="Team App"
      description="All-in-one place for your remote team to chat, collaborate and track project progress."
      :tags="['Website Design', 'Figma', 'Webflow']"
      imageSrc="src/assets/images/chatapp.jpg"
      projectId="2"
    />
    <BaseButton class="more-projects">
      <RouterLink to="/portfolio" class="h-link">see more projects</RouterLink>
    </BaseButton>
  </BaseSection>

  <BasePopup @close="closePopup" v-show="isAboutViewVisible" >
    <AboutView />
  </BasePopup>
  <BasePopup @close="closePopup" v-show="isSkillsViewVisible">
    <SkillsView />
  </BasePopup>

  <ContactView class="contact" />
  <BaseBlob class="the-blobs" />
</div>
</template>

<script setup>
import { ref } from 'vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import AboutView from './AboutView.vue'
import SkillsView from './SkillsView.vue'
import BasePopup from '@/components/BasePopup.vue'
import ContactView from './ContactView.vue'
import BaseBlob from '@/components/BaseBlob.vue'

import thePickImage from '@/assets/images/thePick.jpg'

const isAboutViewVisible = ref(false)
const isSkillsViewVisible = ref(false)

const toggleAboutView = () => {
  isAboutViewVisible.value = !isAboutViewVisible.value
}
const toggleSkillsView = () => {
  isSkillsViewVisible.value = !isSkillsViewVisible.value
}

const closePopup = () => {
  isAboutViewVisible.value = false
  isSkillsViewVisible.value = false
}
</script>

<style scoped>
.hero-section {
  height: 80vh !important;
}
.hero-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding-top: 5vmin;
  gap: 3vmin;
  width: 100%;
}

.left-part {
  grid-column: 1/2;
  grid-row: 1/2;
}

.right-part {
  grid-column: 2/3;
  grid-row: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title{
  font-weight: 800;
  font-size: 5rem;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  padding-top: 10vmin;
}

.description {
  font-weight: 400;
  font-size: 3vmin;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  line-height: 120%;
  letter-spacing: 0.1vmin;
}
.buttons {
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 6vmin;
  margin-bottom: 2vmin;
}

.skills {
  background: rgb(88, 147, 212);
  background: linear-gradient(
    158deg,
    rgba(88, 147, 212, 0.8015581232492998) 24%,
    rgba(230, 126, 34, 0.80015756302521) 100%
  ) !important;
}
.more-projects {
  background: rgb(230, 126, 34);
  background: linear-gradient(158deg, rgba(230, 126, 34, 0.8) 19%, rgba(88, 147, 212) 49%);
}
.h-link {
  color: white;
  text-decoration: none;}
.h-link:hover {
  text-decoration: underline;
}
:deep(.contactForm) {
  display: none !important;
}
:deep(.contactContainer) {
  flex-direction: row !important;
  margin-bottom: none;
}

.me {
  width: 60vmin;
  height: 55vmin;
}

@media (max-width: 768px) {
  :deep(.contactContainer) {
  flex-direction: column !important;
  margin-bottom: 0;
}
.hero-section {
  height: auto !important;
}

.hero-intro {
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  padding-top: 0;
  text-align: center;
  gap: 0;
}
.right-part{
  grid-column: 1/2;
  grid-row: 2/3;
}
.buttons{
  grid-column: 1/2;
  grid-row: 3/4;
  justify-content: center;
  margin-top: 2vmin;
}
.title{
  font-size: 5vmin;
  padding-top: 0;
}
.description {
  font-size: 2vmin;
}
}
</style>
