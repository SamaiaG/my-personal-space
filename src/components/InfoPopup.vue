<template>
    <BasePopup @close="$emit('close')">
      <div class="info-popup">
        <slot></slot>
        <BaseButton @click="$emit('close')">OK</BaseButton>
      </div>
    </BasePopup>
</template>

<script setup>
import BasePopup from '@/components/BasePopup.vue';
import BaseButton from './BaseButton.vue';

const emit = defineEmits(['close']);

</script>


<style scoped>
.info-popup{
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2vmin;
}
:deep(.popup){
    width: 40%;
}
:deep(.close-icon){
    display: none;
}
:deep(.base-button){
    padding: 0.6vw 4vw 0.8vw 4vw;
    background-color: var(--color-primary);
    color: white;
}
:deep(.base-button):hover{
    background-color: white;
    color: var(--color-primary-dark);
}
</style>