<template>
  <div class="my-skills">
    <p class="description">
      This is my range of skills and things I had the possibility to get in touch with.
      Each represents a part of my experience, which I use and develop constantly.
    </p>

    <BaseSection class="skills-section">
      <div class="skills-container">
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/html.svg"
            alt="html"
            class="icon i1 r1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/css.svg"
            alt="css"
            class="icon i1 r1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/js.svg"
            alt="js"
            class="icon r1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/figma.svg"
            alt="figma"
            class="icon r1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/vue.svg"
            alt="vue"
            class="icon r1"
          />
          <img
            src="../assets/images/skillsicons/webflow.svg"
            alt="webflow"
            class="icon r2"
          />
        
            <img src="../assets/images/skillsicons/tailwind.svg" alt="tailwind" class="icon r2" />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/github.svg"
            alt="github"
            class="icon r2"
          />
          <img src="../assets/images/skillsicons/postman.svg" alt="postman" class="icon r2" />
          <img src="../assets/images/skillsicons/adobe.svg" alt="adobexd" class="icon r2" />
            <img
            :class="{ highlighted: isQuestionClicked }"
              src="../assets/images/skillsicons/bootstrap.svg"
              alt="bootstrap"
              class="icon r2"
            />
          <img src="../assets/images/skillsicons/jira.svg" alt="jira" class="icon r2" />
          <img
            src="../assets/images/skillsicons/confluence.svg"
            alt="confluence"
            class="icon r2"
          />
          </div>
    </BaseSection>
    <p class="question" @click="handleQuestionClick">What did I use to create this webpage?</p>
  <BaseBlob />
</div>

</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseBlob from '@/components/BaseBlob.vue';
import { ref } from 'vue'

const isQuestionClicked = ref(false)

const handleQuestionClick = () => {
  isQuestionClicked.value = !isQuestionClicked.value
}
</script>

<style scoped>
.my-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vmin;
}
.skills-section {
  height: 60vh;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
:deep(.s-container){
  justify-content: center;
  gap: 0;
}
.description {
  text-align: center;
  letter-spacing: 0.1vmin;
  line-height: 2.5vmin;
  color: #393737;
  margin: 5vmin 10% 1vmin 10%
}

.r1{
  flex: 0 0 20%;
}

.r2{
  flex: 0 0 25%;
}
.icon {
  width: 100%;
  display: flex;
  object-fit: contain;
  height: 3vw;
}
.r1{
  height: 6vw;
}
.icon:not(.highlighted),
.icon2:not(.highlighted) {
  filter: grayscale(100%);
}
.highlighted {
  filter: grayscale(0%);
  filter: contrast(120%);
}
.question {
  color: #5893d4;
  font-weight: 600;
  margin-bottom: 4vmin;
  text-align: center;
}
.question:hover {
  cursor: pointer;
  text-decoration: underline;
  filter: contrast(150%);
}

@media (max-width: 768px) {
  .icon{
  flex: 0 0 50%;
  height: 5vw;
}
.r1{
  height: 9vw;
}
.description{
  padding: 1vmin 10%;
}
 }
</style>
