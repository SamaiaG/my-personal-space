<template>
  <div class="section">
    <div class="s-container">
      <slot>
      </slot>
    </div>
  </div>
</template>


<style>
.section {
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  width: 100%;
  height: 100%;
  padding: 6vmin 16vmin;
  margin-bottom: 3vmin;
}
.s-container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
@media (max-width: 768px) {
  .section{
    padding: 6vmin;
  }
  .s-container{
    gap: 2vmin;
  }
}
</style>
