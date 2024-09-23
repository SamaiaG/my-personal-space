<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.6vw 2vw 0.8vw 2vw;
  font-size: 1.2vw;
  cursor: pointer;
  border-radius: 0.5vmin;
  box-shadow:var(--first-shadow);
  margin: 1vmin
}
.base-button:hover {  
  color: var(--color-primary-dark);
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .base-button {
    font-size: 1.5vmin;
  }
}
@media (max-width: 768px) {
  .base-button {
    font-size: 16px;
    width: 75%;
    height: 35px;
  }
}
</style>
