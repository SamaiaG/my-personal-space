<template>
  <div class="css-art">
  <BaseSection class="first-css-section">
    <div class="presentation">
      <div class="text">
        <h1>This is me,</h1>
        <h2>and below is my kind of therapy.</h2>
      </div>
      <iframe src="https://samaiag.github.io/css-fun/duolingoavatar/index.html" title="girl" class="me"></iframe>
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
    <iframe src="https://samaiag.github.io/css-fun/anxiety/index.html" title="anxiety"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/backing/index.html" title="cake"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/gym/index.html" title="gym"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/photography/index.html" title="camera"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/travel/index.html" title="globe"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/skaters/index.html" title="skaters"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/sunset/index.html" title="sunset"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/elephant/index.html" title="elephant"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/fishes/index.html" title="fishes"></iframe> 

    <iframe src="https://samaiag.github.io/css-fun/egg/index.html" title="egg"></iframe>
  <iframe src="https://samaiag.github.io/css-fun/butterfly/index.html" title="butterfly"></iframe>
    <iframe src="https://samaiag.github.io/css-fun/cat/index.html" title="cat"></iframe>
  </div>
  <BaseBlob />
</div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseBlob from '@/components/BaseBlob.vue';
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
  width: 55vmin;
  height: 45vmin;
}
</style>
