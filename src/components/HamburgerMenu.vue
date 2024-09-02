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
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8); 
    box-shadow: rgba(17, 12, 46, 0.45) 0px 48px 100px 0px;
    width: 25vmin;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.h-link{
    text-decoration: none;
    color: #393737;
    font-family: 'Raleway', sans-serif;
    padding: 1.5vmin;
    font-size: 2.5vmin;
    cursor: pointer;
}
.h-link:hover{
    background-color: rgba(243, 139, 74, 0.8);
    color: #f9efe7;
    font-family: 'Raleway', sans-serif;
    
}
</style>