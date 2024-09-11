<template>
  <div class="css-art">
    <BaseSection class="first-css-section">
      <div class="presentation">
          <p class="heading"><span class="h h1">This is me,</span> <br> <span class="h h2">and below is my kind of therapy.</span> </p>
        <iframe src="https://samaiag.github.io/css-fun/duolingoavatar/index.html" title="girl" class="me"></iframe>
      </div>
    </BaseSection>
    <div class="css-items">
    <p class="description">Here's a fun collection of my CSS illustrations! 
      I create these whenever I'm feeling tired, using them as a way to unwind. Some are inspired by other artists,
       while others come straight from my imagination or everyday life. It's 
       a great way for me to relax and have fun with coding! Enjoy exploring my colorful creations!</p>
       
    <div class="gallery">
      <div class="gallery-item" v-for="item in galleryItems" :key="item.title">
        <iframe :src="item.src" :title="item.title"></iframe>
        <div class="item-description">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
    <BaseBlob />
  </div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseBlob from '@/components/BaseBlob.vue';

const galleryItems = [
  { src: "https://samaiag.github.io/css-fun/shark/index.html", title: "Shark", description: "A playful shark swimming in the deep blue sea." },
  { src: "https://samaiag.github.io/css-fun/flower%20pot/index.html", title: "Flower Pot", description: "A cheerful potted plant bringing life to any room." },
  { src: "https://samaiag.github.io/css-fun/minimalist%20dog/index.html", title: "Minimalist Dog", description: "A cute, simplified canine companion." },
  { src: "https://samaiag.github.io/css-fun/peter%20griffin/index.html", title: "Peter Griffin", description: "The lovable Family Guy character in CSS form." },
  { src: "https://samaiag.github.io/css-fun/rabbit/index.html", title: "Rabbit", description: "A fluffy bunny hopping into your heart." },
  { src: "https://samaiag.github.io/css-fun/curious%20cat/index.html", title: "Curious Cat", description: "An inquisitive feline exploring its surroundings." },
  { src: "https://samaiag.github.io/css-fun/superman/index.html", title: "Superman", description: "The Man of Steel, ready to save the day!" },
  { src: "https://samaiag.github.io/css-fun/anxiety/index.html", title: "Anxiety", description: "A visual representation of inner turmoil." },
  { src: "https://samaiag.github.io/css-fun/backing/index.html", title: "Cake", description: "A delicious-looking cake to satisfy your sweet tooth." },
  { src: "https://samaiag.github.io/css-fun/gym/index.html", title: "Gym", description: "Fitness equipment to inspire your workout routine." },
  { src: "https://samaiag.github.io/css-fun/photography/index.html", title: "Camera", description: "Capture life's moments with this stylish camera." },
  { src: "https://samaiag.github.io/css-fun/travel/index.html", title: "Globe", description: "Explore the world with this wanderlust-inducing globe." },
  { src: "https://samaiag.github.io/css-fun/sunset/index.html", title: "Sunset", description: "A beautiful sunset to end your day." },
  { src: "https://samaiag.github.io/css-fun/elephant/index.html", title: "Elephant", description: "A majestic elephant never forgets." },
  { src: "https://samaiag.github.io/css-fun/fishes/index.html", title: "Fishes", description: "Colorful fish swimming in harmony." },
  { src: "https://samaiag.github.io/css-fun/egg/index.html", title: "Egg", description: "An egg-cellent addition to your CSS collection." },
  { src: "https://samaiag.github.io/css-fun/butterfly/index.html", title: "Butterfly", description: "A delicate butterfly fluttering by." },
  { src: "https://samaiag.github.io/css-fun/cat/index.html", title: "Cat", description: "A purr-fect feline friend in CSS." },
];
</script>

<style scoped>
iframe {
  border: none;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.heading{
  font-weight: 800;
    font-size: 2.5vw;
    color: #393737;
    font-family: 'Raleway', sans-serif;
    text-align: left;
}
.h{
  font-size: 3vw;
  font-weight: 800;
  color: #393737;
  font-family: 'Raleway', sans-serif;
  text-align: left;
}
.h2{
  font-size: 1.5vw;
}
.css-items{
  padding: 2vmin 16vmin;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
.gallery-item {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.gallery-item:hover {
  transform: translateY(-5px);
}
.description{
  font-family: 'Raleway', sans-serif;
  font-size: 2vmin;
  color: #393737;
  text-align: center;
  padding: 1vmin 2vmin;
}
.item-description {
  padding: 1vmin;
  text-align: center;
}
.item-description h3 {
  margin: 0 0 0.5vmin;
  font-size: 2vmin;
  color: #333;
}
.item-description p {
  margin: 0;
  font-size: 1.5vmin;
  color: #666;
}
.presentation {
  display: flex;
  gap: 3vmin;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1vmin;
}
.me {
  width: 55vmin;
  height: 45vmin;
  box-shadow: none;
  margin:-5vmin
}
</style>