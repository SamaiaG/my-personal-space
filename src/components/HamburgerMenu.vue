<template>
    <div class="hamburger-menu">
        <RouterLink to="/about" class="h-link" @click="closeHam">About me</RouterLink>
        <RouterLink to="/skills" class="h-link" @click="closeHam">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link" @click="closeHam">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link" @click="closeHam">Contact</RouterLink>
    </div>
</template>

<script setup> 
const props = defineProps({
    closeHam: Function
})
</script>

<style scoped>
.hamburger-menu {
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary-opaque); 
    box-shadow: rgba(17, 12, 46, 0.45) 0px 48px 100px 0px;
    width: 100%;
    height: 100vh;
}
.h-link{
    text-decoration: none;
    color: #f9efe7;
    font-size: 18px;
    cursor: pointer;
    padding: 24px;
    width: 100%;
    text-align: center;
}
.h-link:hover{
    color: var(--color-primary);
    background-color: var(--color-background);
}
</style>