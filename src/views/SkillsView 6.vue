<template>
  <div class="skills-section">
    <p class="description">
      This is my range of skills and things I had the possibility to get in touch with.<br />
      Each represents a part of my experience, which I use and develop constantly.
    </p>

    <BaseSection>
      <div class="skill-icons">
        <div class="icons-row r1">
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/html.png"
            alt="html"
            class="icon i1"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/css.png"
            alt="css"
            class="icon i2"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/js.png"
            alt="js"
            class="icon i3"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/figma.png"
            alt="figma"
            class="icon i4"
          />
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/vue.png"
            alt="vue"
            class="icon i5"
          />
        </div>
        <div class="icons-row r2">
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/webflowColor.png"
            alt="webflow"
            class="icon2 i6"
          />
          <figure :class="{ highlighted: isQuestionClicked }" class="icon2 tailwind">
            <img
              :class="{ highlighted: isQuestionClicked }"
              src="../assets/images/skillsicons/tailwindcss.png"
              alt="tailwind short"
              class="icon2 i7"
            />
            <img src="../assets/images/skillsicons/tailwind.png" alt="tailwind" class="icon2 i7" />
          </figure>
          <img
            :class="{ highlighted: isQuestionClicked }"
            src="../assets/images/skillsicons/github.png"
            alt="github"
            class="icon2 i8"
          />
          <img src="../assets/images/skillsicons/postman.png" alt="postman" class="icon2 i9" />
        </div>
        <div class="icons-row r3">
          <img src="../assets/images/skillsicons/adobexd.png" alt="adobexd" class="icon2 i10" />
          <figure :class="{ highlighted: isQuestionClicked }" class="icon2 bootstrap">
            <img
              :class="{ highlighted: isQuestionClicked }"
              src="../assets/images/skillsicons/bootstrapShort.png"
              alt="bootstrap short"
              class="icon2 i11"
            />
            <img
              src="../assets/images/skillsicons/bootstrap.png"
              alt="bootstrap"
              class="icon2 i11"
            />
          </figure>
          <img src="../assets/images/skillsicons/jira.png" alt="jira" class="icon2 i12" />
          <img
            src="../assets/images/skillsicons/confluence.png"
            alt="confluence"
            class="icon2 i13"
          />
        </div>
      </div>
    </BaseSection>
    <p class="question" @click="handleQuestionClick">What did I use to create this webpage?</p>
  </div>
  <BaseBlob />
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
.skills-section {
  margin: 5vmin 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vmin;
}
.icon {
  width: auto;
  object-fit: contain;
}

.icon:not(.highlighted),
.icon2:not(.highlighted) {
  filter: grayscale(100%);
}
.highlighted {
  filter: grayscale(0%);
  filter: contrast(120%);
}
.icon2 {
  display: flex;
  object-fit: contain;
}

.icons-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5vmin;
}

.skill-icons {
  display: flex;
  flex-direction: column;
  gap: 5vmin;
}
.bootstrap,
.tailwind {
  display: flex;
  gap: 1vmin;
}
.skill-icons figure {
  margin: 0;
}

.description {
  text-align: center;
  letter-spacing: 0.1vmin;
  line-height: 2.5vmin;
  color: #393737;
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
</style>
