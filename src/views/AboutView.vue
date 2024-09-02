<template>
  <div class="about">
    <BaseSection class="about-me">
      <h1 class="name">Samaia Gahramanov</h1>
      <div class="main-info">
        <div class="my-info">
          <figure class="fig born-date">
            <img src="@/assets/images/icons/calendar.png" alt="Birthdate" class="l-icon birthdate" />
            <figcaption class="birthdate-text">17 September 1996</figcaption>
          </figure>
          <figure class="fig birthplace">
            <figcaption class="birthplace-text">born in</figcaption>
            <img
              src="@/assets/images/icons/moldova.png"
              alt="Republic of Moldova"
              class="l-icon birthplace-img"
            />
          </figure>
          <figure class="fig current-place">
            <figcaption class="current-place-text">currently based in</figcaption>
            <img src="@/assets/images/icons/germany.png" alt="Germany" class="l-icon birthplace-img" />
            <figcaption class="fig current-city">
              (<img src="@/assets/images/icons/cologne.png" class="l-icon city" />)
            </figcaption>
          </figure>
        </div>
        <div class="my-image">
          <img src="../assets/images/my-photo.png" alt="" class="my-photo" />
        </div>
      </div>
    </BaseSection>
    <div class="studies-and-experience">
      <div class="se">
        <div class="period">September 2023 - March 2024</div>
        <div class="details">
          <div class="detail what">Internship</div>
          <div class="detail at">adesso SE</div>
          <div class="detail location">Cologne, Germany</div>
        </div>
      </div>
      <div class="se">
        <div class="period">December 2022 - February 2023</div>
        <div class="details">
          <div class="detail what">Python Associate Programmer Course</div>
          <div class="detail at">WBS Training AG</div>
          <div class="detail location">(online)</div>
        </div>
      </div>
      <div class="se">
        <div class="period">October 2021 - March 2022</div>
        <div class="details">
          <div class="detail what">Software Testing Training</div>
          <div class="detail at">IT School</div>
          <div class="detail location">Romania (online)</div>
        </div>
      </div>
      <div class="se">
        <div class="period">September 2015 - July 2018</div>
        <div class="details">
          <div class="detail what">Applied Informatics</div>
          <div class="detail at">State University of the Republic of Moldova</div>
          <div class="detail location">Chișinău, Republic of Moldova</div>
          <div class="degree">Bachelor</div>
        </div>
      </div>
    </div>
    <div class="languages">
      <LanguagesChart />
    </div>
    <p class="contact">
      For more details, please
      <a class="gmail" href="mailto:samaiagahramanov@gmail.com?subject=Hello from your website">
        contact me</a
      >
      directly. <br />
      I’ll be happy to share more infos with you.
    </p>
    <BaseBlob />
  </div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import LanguagesChart from '@/components/LanguagesChart.vue'
import BaseBlob from '@/components/BaseBlob.vue'
</script>

<style scoped>
.about {
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  color: #393737;
  letter-spacing: 0.2vmin;
  padding: 0 26vmin;
  display: flex;
  flex-direction: column;
  gap: 5vmin;
}

.about-me {
 margin: 0 -26vmin;
 padding: 6vmin 26vmin;
 width: auto!important;
}

h1 {
  color: black;
}
.main-info {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.my-photo {
  width: 22vmin;
}
.fig {
  display: flex;
  align-items: flex-end;
  gap: 1vmin;
}
.current-city {
  gap: 0;
}
.l-icon {
  width: 4vmin;
  height: 4vmin;
}
.born-date {
  margin-bottom: 4vmin;
}
.birthplace {
  margin: 0 !important;
}

.se {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vmin;
  margin: 0 3vmin 2vmin 3vmin;
}

.what,
.degree {
  font-weight: 600;
}
.location {
  color: #e67e22;
}
.degree {
  color: #5893d4;
  font-style: italic;
}
.languages {
  align-self: center;
}
.contact {
  margin-bottom: 8vmin;
  text-align: center;
  font-size: 2vmin;
  letter-spacing: 0.2vmin;
}
.gmail {
  color: #5893d4;
  text-decoration: none;
}
</style>
