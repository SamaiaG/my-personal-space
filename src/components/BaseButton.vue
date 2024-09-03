<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  min-width: 30vmin;
  max-height: 7vmin;
  background: rgb(230, 126, 34);
  background: linear-gradient(
    158deg,
    rgba(230, 126, 34, 0.80015756302521) 35%,
    rgba(88, 147, 212, 1) 100%
  );
  color: white;
  border: none;
  padding: 2vmin;
  font-size: 2vmin;
  cursor: pointer;
}
</style>
