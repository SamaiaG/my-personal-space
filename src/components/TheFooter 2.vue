<template>
  <div class="footer">
    <div class="container">
      <figure class="logo_p">
        <img src="../assets/images/logo_w.png" alt="logo" class="logo2" />
        <figcaption class="caption">My personal website.</figcaption>
      </figure>
      <p class="copyright">© Copyright Samaia Gahramanov 2024</p>
      <nav class="nav">
        <RouterLink to="/about" class="h-link">About me</RouterLink>
        <RouterLink to="/skills" class="h-link">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link">Contact</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #5893d4;
  color: white;
  font-size: 1.3vmin;
  padding: 0 16vmin;
}

.nav {
  display: flex;
  gap: 5vmin;
}

.h-link {
  text-decoration: none;
  color: white;
  padding: 0.3vmin 0;
  font-size: 2vmin;
  font-weight: 400;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4vmin 0 2vmin;
}
.caption {
  font-size: 1.7vmin;
}
.logo2 {
  width: 7vmin;
}
.copyright {
  font-size: 1.2vmin;
  align-self: flex-end;
}
</style>
