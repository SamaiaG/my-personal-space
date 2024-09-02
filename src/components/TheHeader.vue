<template>
  <header>
    <div class="h-container">
      <RouterLink to="/">  <div id="logo"></div></RouterLink>
      <nav class="nav">
        <RouterLink to="/about" class="h-link">About me</RouterLink>
        <RouterLink to="/skills" class="h-link">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.h-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 160px;
}

#logo {
  background-image: url('../assets/images/logoS.svg');
  background-size: cover;
  background-position: center;
  width: 10vmin;
  height: 10vmin;
  margin-left:0.8vmin;
  margin-top: 0.8vmin
}
#logo:hover {
  background-image: url('../assets/images/logo_w.png');
}
.nav {
  display: flex;
  align-items: stretch;
}
.h-link {
  font-size: 1rem;
  text-decoration: none;
  color: #393737;
  padding: 0.8vmin 2vmin;
  place-content: center;
}
.h-link:hover,
a:hover {
  background-color: rgba(243, 139, 74, 0.8);
  color: white;
}
</style>
