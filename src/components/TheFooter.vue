<template>
  <div class="footer">
    <div class="container">
      <figure class="logo_p">
        <img src="../assets/images/logo_white.png" alt="logo" class="logo2" />
        <figcaption class="caption">My personal website.</figcaption>
      </figure>
      <div class="nav">
        <RouterLink to="/about" class="h-link">About me</RouterLink>
        <RouterLink to="/skills" class="h-link">Skills</RouterLink>
        <RouterLink to="/portfolio" class="h-link">Portfolio</RouterLink>
        <RouterLink to="/contact" class="h-link">Contact</RouterLink>
      </div>
      <p class="copyright">© Copyright Samaia Gahramanov 2024</p>

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
  justify-content: end;
  grid-row: 1;
  grid-column: 2;
  gap: 5vmin;
  flex-wrap: nowrap;
}

.h-link {
  text-decoration: none;
  color: white;
  font-size: 2vmin;
  text-wrap: nowrap;
}

.container {
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 4vmin 0 2vmin;
}

.logo-p {
  grid-row: 1;
  grid-column: 1;
}
.caption {
  font-size: 1.7vmin;
}
.logo2 {
  width: 5vmin;
  margin-bottom: 1vmin;
}
.copyright {
  grid-row: 2 / 4; 
  grid-column: 1 / 3;
  font-size: 1.2vmin;
  text-align: center;
}
@media (max-width: 768px){
  .container{
    display: flex;
    flex-direction: column;
  }
  .nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vmin;
  }
  .logo_p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .copyright{
    margin: 2vmin 0;
  }
}
</style>
