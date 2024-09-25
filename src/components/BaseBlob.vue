<template>
  <div class="blob-container">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
  </div>
</template>

<style scoped>
.blob-container {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;}

.blob {
  position: absolute;
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  filter: blur(40px);
  width: 30vmin;
  height: 30vmin;
}
.b1,
.b3 {
  background: var(--blob-orange);
  animation: move1 20s linear reverse infinite;
}
.b2,
.b4 {
  background: var(--blob-blue);
  animation: move2 20s linear reverse infinite;
}

.b1 {
  top: 0;
  left: 0;
}
.b2 {
  top: 20%;
  right: 5%;
}
.b3 {
  top: 60%;
  right: 30%;
}
.b4 {
  top: 30%;
  left: 30%;
}
@keyframes move1 {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  50% {
    transform: translate(80%, 20%) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

@keyframes move2 {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  50% {
    transform: translate(-70%, -40%) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}
</style>
