<template>
  <div class="my-skills">
    <p class="description">
      This is my range of skills and things I had the possibility to get in touch with.<br />
      Each represents a part of my experience, which I use and develop constantly.
    </p>

    <BaseSection class="skills-section">
        <div class="icons-row r1">
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/html.svg"
            alt="html"
            class="icon i1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/css.svg"
            alt="css"
            class="icon i2"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/js.svg"
            alt="js"
            class="icon i3"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/figma.svg"
            alt="figma"
            class="icon i4"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/vue.svg"
            alt="vue"
            class="icon i5"
          />
        </div>
        <div class="icons-row r2">
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/webflow.svg"
            alt="webflow"
            class="icon i6"
          />
        
            <img  :class="{ highlighted: isQuestionClicked }" src="../assets/images/skillsicons/tailwind.svg" alt="tailwind" class="icon i7" />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/github.svg"
            alt="github"
            class="icon i8"
          />
          <img src="../assets/images/skillsicons/postman.svg" alt="postman" class="icon i9" />
        </div>
        <div class="icons-row r3">
          <img src="../assets/images/skillsicons/adobe.svg" alt="adobexd" class="icon i10" />
            <img
            :class="{ highlighted: isQuestionClicked }"
              src="../assets/images/skillsicons/bootstrap.svg"
              alt="bootstrap"
              class="icon i11"
            />
          <img src="../assets/images/skillsicons/jira.svg" alt="jira" class="icon i12" />
          <img
            src="../assets/images/skillsicons/confluence.svg"
            alt="confluence"
            class="icon i13"
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
  justify-content: space-between;
}
:deep(.s-container){
  justify-content: center;
}
.description {
  text-align: center;
  letter-spacing: 0.1vmin;
  line-height: 2.5vmin;
  color: #393737;
  margin-top: 5vmin;
}

.icons-row {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 8vw;
  width: 100%;
  height: 30%;
  flex-wrap: wrap;
}

.icon {
  display: flex;
  object-fit: contain;
  height: 3vw;
}

figure {
  margin: 0;
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
  margin-top: 2vmin;
  text-align: center;
}
.question:hover {
  cursor: pointer;
  text-decoration: underline;
  filter: contrast(150%);
}

.r1 .icon{
  height: 6vw;
}
@media (max-width: 768px) {


}
</style>
