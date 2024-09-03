<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  max-width: 25vw;
  max-height: 7vmin;
  background: rgb(230, 126, 34);
  background: linear-gradient(
    158deg,
    rgba(230, 126, 34, 0.80015756302521) 35%,
    rgba(88, 147, 212, 1) 100%
  );
  color: white;
  border: none;
  padding: 0.8vw 2vw;
  font-size: 1vw;
  cursor: pointer;
  border-radius: 0.5vmin;
}

@media (max-width: 1024px) {
  .base-button {
    padding: 0.7vw 2vw;
  }
}
</style>
