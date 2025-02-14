<template>
  <div class="footer">
    <div class="container">
      <figure class="logo_p">
        <img src="../assets/images/Logo.png" alt="logo" class="logo2" />
      </figure>
        <div class="contact-methods">
                    <a  target="_blank" href="https://www.linkedin.com/in/samaia-gahramanov-569343232/">
                        <img src="../assets/images/icons/Linkedin.png" alt="linkedin" class="contact">
                    </a>
                    <a class="gmail"  target="_blank" href="mailto:samaiagahramanov@gmail.com">
                        <img src="../assets/images/icons/Gmail.png" alt="email" class="contact">
                    </a>
                </div>

      <p class="copyright">©Samaia Gahramanov 2024</p>

    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--absolute-white);
  color: var(--primary-blue);
  font-size: 1.3vmin;
  padding: 0 16vmin;
}

.contact-methods {
  display: flex;
  justify-content: end;
  grid-row: 1;
  grid-column: 2;
  gap: 2vmin;
  flex-wrap: nowrap;
}

.h-link {
  text-decoration: none;
  color: white;
  font-size: 2vmin;
  text-wrap: nowrap;
}

.h-link:hover {
  text-decoration: underline;
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
.contact{
  height: 3vmin;
}
.copyright {
  grid-row: 2 / 4; 
  grid-column: 1 / 3;
  font-size: 1.2vmin;
  text-align: center;
  font-family: 'Nunito', sans-serif;
}
@media (max-width: 768px){
  .footer {
  padding: 0 1.66rem;
}
.copyright{
  font-size: 0.8rem;
}
.logo2{
  height: 2.5rem;
  width: 2.5rem;
}
.contact{
  height: 1.5rem; 
}
}
</style>
