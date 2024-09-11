<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  min-width: 25%;
  max-width: 40vw;
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
  font-size: 1.2vw;
  cursor: pointer;
  border-radius: 0.5vmin;
}
.base-button:hover {  
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .base-button {
    font-size: 1.5vmin;
  }
}
@media (max-width: 768px) {
  .base-button {
    font-size: 3vmin;
    padding: 1.5vmin 3vmin;
  }
}
</style>
