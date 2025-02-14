<template>
    <svg class="arrows" @click="scrollToSection">
              <path class="a1" d="M0 0 L40 32 L80 0"></path>
              <path class="a2" d="M0 20 L40 52 L80 20"></path>
              <path class="a3" d="M0 40 L40 72 L80 40"></path>
            </svg>
</template>

<script setup>
const emit= defineEmits(['scrollToSection'])

const scrollToSection = () => {
  emit('scrollToSection')
}
</script>
<style scoped>
.arrows {
  width: 8vmin;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: 20px;
}
.arrows:hover{
  cursor: pointer;
}

.arrows path {
  stroke: var(--accent-peach);
  fill: transparent;
  stroke-width: 2px;  
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite; 
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow 
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; 
}

.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; 
}

.arrows path.a3 { 
  animation-delay:0s;
  -webkit-animation-delay:0s;
}
</style>