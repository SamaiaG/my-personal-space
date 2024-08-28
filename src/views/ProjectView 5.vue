<template>
  <div class="project-showcase">
    <BaseSection class="project-section">
      <h5 class="sub-tag">project showcase</h5>
      <h1 class="project-title">The Pick</h1>
      <p class="project-description">
        This is a homepage design and build for a concept project – a chat application. I have
        designed the page first then later built a responsive page in Webflow.
      </p>
      <a href="https://the-pick.webflow.io/" class="project-link">visit live site →</a>
    </BaseSection>
    <img src="../assets/images/thepickentire.png" alt="project image" class="project-image" />
  </div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
</script>

<style scoped>
.project-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-section {
  height: 80vh !important;
}
.sub-tag {
  color: rgb(0, 0, 0, 0.35);
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.3vmin;
  text-transform: uppercase;
}
.project-title {
  color: #393737;
  font-size: 8vmin;
  font-weight: 200;
}
.project-link {
  text-decoration: none;
  color: black;
  font-weight: 600;
  background: linear-gradient(0deg, rgba(255, 232, 114, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.project-image {
  width: 120vmin;
  position: relative;
  top: -30vmin;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
}
</style>
