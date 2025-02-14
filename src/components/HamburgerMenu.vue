<template>
    <div class="hamburger-menu">
        <RouterLink to="/" class="h-link" @click="closeHam">Home</RouterLink>
        <RouterLink to="/portfolio" class="h-link" @click="closeHam">Projects</RouterLink>
        <RouterLink to="/cssfun" class="h-link" @click="closeHam">Fun</RouterLink>
        <RouterLink to="/about" class="h-link" @click="closeHam">About me</RouterLink>
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
    background-color: var(  --light-blue); 
    box-shadow: rgba(17, 12, 46, 0.45) 0px 48px 100px 0px;
    width: 100%;
    height: 100vh;
}
.h-link{
    text-decoration: none;
    color: #f9efe7;
    font-size: 8vmin;
    cursor: pointer;
    padding: 24px;
    width: 100%;
}
.h-link:hover{
    color: var(  --primary-blue);
    background-color: var(--color-background);
}
</style>