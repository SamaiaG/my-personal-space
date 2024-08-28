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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.blob {
  position: absolute;
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  filter: blur(40px);
  width: 30vmin;
  height: 30vmin;
}
.b1,
.b3 {
  background: rgb(230, 126, 34);
  background: linear-gradient(
    126deg,
    rgba(230, 126, 34, 1) 0%,
    rgba(211, 84, 0, 1) 35%,
    rgba(244, 164, 96, 1) 100%
  );
  animation: move1 20s linear infinite reverse;
}
.b2,
.b4 {
  background: rgb(11, 37, 69);
  background: linear-gradient(
    158deg,
    rgba(11, 37, 69, 1) 0%,
    rgba(36, 65, 107, 1) 35%,
    rgba(88, 147, 212, 1) 100%
  );
  animation: move2 20s linear infinite reverse;
}

.b1 {
  top: 0;
  left: 0;
}
.b2 {
  top: 190%;
  left: 110vmin;
}
.b3 {
  top: 100vmin;
  left: 60vmin;
}
.b4 {
  top: 130vmin;
  left: 10vmin;
}
@keyframes move1 {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  100% {
    transform: translate(30vmin, 20vmin) rotate(180deg);
  }
}
@keyframes move2 {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  100% {
    transform: translate(-10vmin, 0) rotate(180deg);
  }
}
</style>
