<template>
  <div class="item-container">
    <div class="gallery-item">
      <iframe :src="src" class="card-iframe"  title="Project Preview"></iframe>
    </div>
    <div class="project-description">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description" >{{ description }}</p>
      <p class="card-link" v-if="link"><a :href="link" target="_blank" class="link">See my illustrations on GitHub.</a></p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  imageSrc: String,
  src: String,
  link: String,
  projectId: String
});

</script>

<style scoped>
.item-container {
  width: 100%;
  padding: 4vmin 6vmin;
  position: relative;
}

.project-description {
  width: 100%;
  position: absolute;
  background: rgba(255,255,255,0.4);
-webkit-backdrop-filter: blur(22px);
backdrop-filter: blur(22px);
padding: 4vmin 6vmin;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.item-container:hover .project-description {
  display: flex;
}

.card-title {
  font-size: 2.5vmin;
  color: var(--primary-blue);
  text-align: center;
}
.card-description, .link {
  font-size: 1.7vmin;
  color: var(--text-charcoal);
}
.link{ 
  font-style: italic;
}

.card-image {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  object-position: left;
}

.card-iframe {
  width: 100%;
  height: 30vh;
  border: none;
}

.update {
  font-size: 1vmin;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: var(--second-shadow);
}
.gallery-item:hover {
  transform: translateY(-5px);
}
.item-description {
  padding: 1rem;
  text-align: center;
}
.item-description h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #333;
}
.item-description p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 1024px) {
  .title {
    font-size: 4vmin;
  }
  .description {
    font-size: 2vmin;
  }
  .item-container {
    padding: 2vmin 0;
  }
  .gallery-item {
    height: 20vh;
  }
}
</style>
