<template>
  <BaseSection class="hero-section">
    <h1>Hi and welcome!</h1>
    <p class="description">
      I am Samaia - a newbie developer, and this is<br />
      the place I created to put the things together.
    </p>
    <div class="buttons">
      <BaseButton @click="toggleAboutView" class="about">get to know me better</BaseButton>
      <BaseButton @click="toggleSkillsView" class="skills"
        >see my ongoing learning journey</BaseButton
      >
    </div>
  </BaseSection>
  <BaseSection class="second-section">
    <ProjectDescription
  title="The Pick"
  description="This is a tool for making the choice-making easier."
  :tags="['Website Design', 'Figma', 'Web Development']"
  imageSrc="src/assets/images/thePick.jpg"
  projectLink="/project"
/>
<ProjectDescription
  title="Team App"
  description="  This is a homepage design and build for a concept project – a chat application. I have
        designed the page first then later built a responsive page in Webflow."
  :tags="['Website Design', 'Figma', 'Webflow']"
  imageSrc="src/assets/images/chatapp.jpg"
  projectLink="/project"
/>
    <BaseButton class="more-projects">
      <RouterLink to="/portfolio" class="h-link">see more projects</RouterLink></BaseButton
    >
  </BaseSection>

  <BasePopup @close="closePopup" v-show="isAboutViewVisible" >
    <AboutView />
  </BasePopup>
  <BasePopup @close="closePopup" v-show="isSkillsViewVisible">
    <SkillsView />
  </BasePopup>
  <ContactView class="contact" />

  <BaseBlob class="the-blobs" />
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

h1 {
  font-size: 10vmin;
  font-weight: 800;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  padding-top: 10vmin;
}
.description {
  font-size: 2.5vmin;
  font-weight: 400;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  line-height: 120%;
  letter-spacing: 0.1vmin;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vmin;
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
  text-decoration: none;
  font-weight: 700;
}
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

</style>
