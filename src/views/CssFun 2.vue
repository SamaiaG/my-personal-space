<template>
  <BaseSection class="first-css-section">
    <div class="presentation">
      <div class="text">
        <h1>This is me,</h1>
        <h2>and below is my kind of therapy.</h2>
      </div>
      <iframe src="https://samaiag.github.io/css-fun/girl/index.html" title="girl" class="me"></iframe>
    </div>
  </BaseSection>

  <div class="container">
    <iframe src="https://samaiag.github.io/css-fun/shark/index.html" title="shark"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/flower%20pot/index.html" title="flower"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/minimalist%20dog/index.html" title="dog"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/peter%20griffin/index.html" title="peter griffin"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/rabbit/index.html" title="rabbit"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/curious%20cat/index.html" title="forest"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/superman/index.html" title="superman"></iframe>
    <iframe src="/100 days of CSS/anxiety/index.html" title="anxiety"></iframe>
    <iframe src="/100 days of CSS/backing/cake.html" title="cake"></iframe>
    <iframe src="/100 days of CSS/gym/index.html" title="gym"></iframe>
    <iframe src="/100 days of CSS/photography/index.html" title="camera"></iframe>
    <iframe src="/100 days of CSS/travel/index.html" title="globe"></iframe>
    <iframe src="/100 days of CSS/skaters/index.html" title="skaters"></iframe>
    <iframe src="/100 days of CSS/sunset/index.html" title="sunset"></iframe>
    <iframe src="/100 days of CSS/elephant/index.html" title="elephant"></iframe>
    <iframe src="/100 days of CSS/fishes/index.html" title="fishes"></iframe> 

    <iframe src="/100 days of CSS/egg/index.html" title="egg"></iframe>
  <iframe src="/100 days of CSS/butterfly/index.html" title="butterfly"></iframe>
    <iframe src="/100 days of CSS/cat/index.html" title="cat"></iframe>
  </div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
</script>

<style scoped>
iframe {
  border: none;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vmin !important;
  margin-bottom: 5vmin;
}
.presentation {
  display: flex;
  gap: 3vmin;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1vmin;
}
.me {
  width: 50vmin;
  height: 40vmin;
}
</style>
