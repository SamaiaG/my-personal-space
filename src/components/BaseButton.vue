<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  max-width: 35vmin;
  max-height: 7vmin;
  background: rgb(230, 126, 34);
  background: linear-gradient(
    158deg,
    rgba(230, 126, 34, 0.80015756302521) 35%,
    rgba(88, 147, 212, 1) 100%
  );
  color: white;
  border: none;
  padding: 2vmin 4vmin;
  font-size: 2vmin;
  cursor: pointer;
}

@media (max-width: 768px) {
  .base-button {
    padding: 1vmin 2.5vmin;
  }
}
</style>
