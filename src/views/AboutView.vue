<template>

  <div class="about">
  
    <div class="my-image">
      <img src="../assets/images/myPhoto.jpg" alt="" class="my-photo" />
    </div>
    <div class="about-text">
      <div class="about-me">
        <h1 class="name">Samaia Gahramanov</h1>
        <div class="current-place">
          <p class="text"> Located in Germany <span><img src="@/assets/images/icons/cologne.png" class="l-icon city" /></span> </p>
        </div>
        <p class="email text">samaiagahramanov@gmail.com</p>
      </div>
      <div class="more-about">
      <h1 class="s-title">A little about me</h1>
      <p class="text">
        I am a beginner UX Designer with a passion for creativity and problem-solving. Born in the Republic of Moldova 🇲🇩, a small country in Eastern Europe, I grew up in a village at my grandparents' house before moving to the capital to study Applied Informatics at the State University of Moldova.
        As a child, I was always creative—I loved writing, I excelled in literature and language studies. Despite this, I decided to study Applied Informatics because it was a completely new field for me. My curiosity and interest in the unknown pushed me to explore the world of technology, leading me to earn a bachelor's degree 🎓 in this field.
        <br><br>In 2020, I moved to Germany 🇩🇪, where I used my time to explore UX design with Adobe XD while simultaneously learning German and discovering a new culture. My curiosity led me to some software testing and Python programming courses as I tried to find my own path in the tech world. After a long time of learning and experimenting, I had the opportunity to do an internship in software development. At the beginning of the project, my team and I had to design the application, and for the second time, I felt truly captivated by the design process. Despite being new to Figma, I was drawn to the creative and strategic aspects of UX/UI.
        After the internship, I decided to dive deeper into UX/UI, working on my portfolio and refining my skills. This journey has given me valuable insights into my creativity, perseverance, and passion for user-centered design 👩‍💻. 
        <br> <br>📷 Beyond design, I love traveling, exploring new places, creating, observing, and capturing moments through photography. Below, you’ll find a selection of my favorite shots captured in the last years —glimpses of the places, moments, and perspectives that have inspired me along the way. 
      </p>
      </div>
      <div class="softskills">
        <h1 class="s-title">My Guiding Principles</h1>
        <p class="text"> <strong>📚 Never stop learning.</strong> <br> Knowledge is limitless, and learning is the key in our fast-moving world. By learning, I mean not only studying. Learn languages, learn inline skating, learn baking, and cooking your favorite foods. At the end of the day, all that you have learned will contribute to moving you forward. </p>
        <p class="text"> <strong>🧘‍♀️ Be flexible to changes.</strong> <br> Things are often not going as planned. Embrace change with an open mind, calmness, and see challenges as opportunities for growth.</p>
        <p class="text"> <strong>💖 Listen and empathize.</strong> <br> True understanding comes from active listening. Putting yourself in others' shoes helps create meaningful connections and better solutions.</p>
        <p class="text"> <strong>🛠️ Do good out of what you have.</strong> <br> It is not about having the best tools; it’s about making the best of what’s available, using your brain, flexibility, and empathy to turn limitations into results.</p>
        <p class="text"> <strong>🪞 Reflect.</strong> <br> Take time to analyze yourself, the world around you, your experiences, and your feelings in order to refine your path forward. Growth comes from self-awareness.</p>
      </div>
    </div>
  
    <div class="lan-att">
      <div class="languages">
        <div class="language">
          <p class="text">Romanian</p>
          <p class="text">Russian</p>
          <p class="text">German</p>
          <p class="text">English</p>
        </div>  

        <div class="bars">
          <div class="bar b-rom"> <p class="text lan">Native</p></div>
          <div class="bar b-ru"> <p class="text lan">C1</p></div>
          <div class="bar b-de"><p class="text lan">C1</p></div>
          <div class="bar b-en"><p class="text lan">B2</p></div>
        </div> 
      </div> 
    
    <div class="attachements div6">
      <a class="att" target="_blank" href="https://drive.google.com/file/d/1PmFdRKRVGy3U6JymA_Eszwwvy6mw2Kjt/view?usp=sharing">
        <img src="@/assets/images/icons/CVde.png" class="at-icon">
      </a>
      <a class="att" target="_blank" href="https://drive.google.com/file/d/1AcrR73pcFjFX-6XMqOLFWZvH8ZG2B178/view?usp=sharing">
        <img src="@/assets/images/icons/CVen.png" class="at-icon">
      </a>
      <a class="att" target="_blank" href="https://www.credly.com/badges/766b4fc6-20e0-4f0e-a35e-c168a9a64be1/public_url">
        <img src="@/assets/images/icons/UXCert.png" class="at-icon">
      </a>
    </div>
    </div>
  
    <div class="gallery">
      <ImageGallery />
    </div>
  </div>
</template>

<script setup>
import ImageGallery from '@/components/ImageGallery.vue';
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    gap: 10vmin;
    padding: 3vmin 16vmin;
}
.my-image{
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.my-photo {
   border-radius: 50%;
    object-fit: cover;
    height: 100%;
}
.about-text{
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 5%;
} 
.name{
  font-weight: 500!important;
}
.current-place{
  display: flex;
  align-items: center;
}
.city{
  height: 3vmin;
}
.email{
  font-style: italic;
}

.text{
  font-size: 1.8vmin;
  font-family: 'Nunito', sans-serif;
}
.more-about{
  grid-row: span 2 / span 2;
}
.softskills, .more-about{
  display: flex;
  flex-direction: column;
  gap: 1vmin
}
.lan-att{
  display:grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 5%
}
.languages{
  display: flex;
  width: 100%;
  justify-content: start;
  gap: 2vmin
}


.attachements{
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1vmin
}
.att{
  width: 12vmin;
  height: 12vmin;
}
.language,.bars{
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 2vmin
}
.bars{  
  width: 100%;
}
.text{
  margin-bottom: 0;
}
.bar{
  width: 100%;
  height: 100%;
  background-color: var(--primary-blue);
  padding: 0.5vmin 1vmin;
  align-self: stretch;
  margin: 0.2vmin 0;
}
.b-ru{
  width: 85%;
  background-color: var(--accent-peach);
}
.b-de{
  width: 80%;
  background-color: var(--light-blue);
}
.b-en{
  width: 65%;
  background-color: #FEB4B4;
}
.lan{
  font-style: italic;
  color: white !important;
  font-size: 1.4vmin;
  display: none;
}
.bar:hover .lan{
  display: block;
}
.at-icon{
  width: 100%;
  height: 100%;
  margin: 0 1vmin;
}

@media (max-width: 1024px) {
  .about-text{
    grid-template-columns: 1fr;
    gap: 5vmin
  }
  .my-image{
    height: 20vh;
  }
  .name{
    font-size: 1.6rem;
  }
  .text{
    font-size: 1rem;
  }
  .city{
  height: 5vmin;
}
.s-title{
  font-size: 1.3rem;
}
.lan-att{
  grid-template-columns: 1fr;
  gap: 4vmin;
}
.lan-att .text{
  font-size: 1.3rem;
}
.attachements {
  justify-content: center;
}
.att{
  width: 20vmin;
  height: 20vmin;
}
}
@media (max-width: 768px) {
  .about{
  padding: 1.66rem;
}
.lan-att .text {
      font-size: 0.9rem;
      text-align: end;
    }
 
}
</style>
