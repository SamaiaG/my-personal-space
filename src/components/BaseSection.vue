<template>
  <div class="section">
    <div class="s-container">
      <slot>
      </slot>
    </div>
  </div>
</template>


<style scoped>
.section {
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 6vmin 16vmin;
  height: auto;
  margin-bottom: 3vmin;
  width: 100%;
}
.s-container {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 6vmin;
  overflow: hidden;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);
  filter: blur(30px);
  z-index: -1;
}

.section-content {
  position: relative;
  z-index: 1;
}
</style>
