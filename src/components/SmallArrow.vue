<template>
    <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<style scoped>

.arrow {
    transform: translate(-50%, -50%);
    transform: rotate(-90deg);
    cursor: pointer;
}

.arrow span {
    display: block;
    width: 0.5vw;
    height: 0.5vw;
    border-bottom: 2px solid var(--accent-peach);
    border-right: 2px solid var(--accent-peach);
    transform: rotate(45deg);
    animation: animate 2s infinite;
}

.arrow span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}

@media (max-width: 768px) {
    .arrow span {
        width: 1.5vmin;
        height: 1.5vmin;
    }
}
</style>