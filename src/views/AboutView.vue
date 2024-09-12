<template>
  <div class="about">
    <BaseSection class="about-me">
      <h1 class="name">Samaia Gahramanov</h1>
      <div class="main-info">
        <div class="my-info">

          <div class="fig born-date">
            <img src="@/assets/images/icons/calendar.png" alt="Birthdate" class="l-icon birthdate" />
            <p class="birthdate-text text">17 September 1996</p>
          </div>

          <div class="fig birthplace">
            <p class="birthplace-text text">born in the Republic of Moldova</p>
            <img
              src="@/assets/images/icons/moldova.png"
              alt="Republic of Moldova"
              class="l-icon birthplace-img"
            />
          </div>
          <div class="fig current-place">
            <p class="current-place-text text"> based in Germany</p>
            <img src="@/assets/images/icons/germany.png" alt="Germany" class="l-icon birthplace-img" />
            <p class="fig current-city text"> 
              (Cologne <img src="@/assets/images/icons/cologne.png" class="l-icon city" />)
            </p>
          </div>
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
      <div class="romanian l-bar">Romanian (Native)</div>
      <div class="russian l-bar">Russian</div>
      <div class="german l-bar">German</div>
      <div class="english l-bar">English</div>
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
import BaseBlob from '@/components/BaseBlob.vue'
</script>

<style scoped>
.about {
  font-weight: 200;
  color: #393737;
  letter-spacing: 0.2vmin;
  display: flex;
  flex-direction: column;
  gap: 5vmin;
}
:deep(.s-container){
  gap: 3vmin;
}

.main-info {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.my-info{
  display: flex;
  flex-direction: column;
  gap: 1vmin;
  font-size: 2vw;
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

.birthplace {
  margin: 0 !important;
}

.se {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 0 0 5vmin 0;
  gap: 6vmin;
}
.text{
  margin: 0;
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

.contact {
  padding: 2vmin 0 8vmin 0;
  text-align: center;
  font-size: 2vmin;
  letter-spacing: 0.2vmin;
}
.gmail {
  color: #5893d4;
  text-decoration: none;
}
.studies-and-experience, .languages{
  padding: 2vmin 10%;
  width: 100%;
}
.languages{
  align-self: center;
}
.l-bar{
  height: 4vmin;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.5vmin;
  font-weight: 600;
  color: white;
  padding: 2vmin 4vmin;
  border-radius: 0.5vmin;
  margin: 0 0 1vmin 0;
}

.romanian{
  width: 100%;
  background: rgb(211,84,0);
  background: linear-gradient(90deg, rgba(211,84,0,1) 0%, rgba(244,164,96,1) 35%);
}

.russian{
  width: 90%;
  background: rgb(244,164,96);
  background: linear-gradient(90deg, rgba(244,164,96,1) 0%, rgba(88,147,212,1) 62%);
}
.german{
  width: 70%;
  background: rgb(88,147,212);
  background: linear-gradient(90deg, rgba(88,147,212,1) 0%, rgba(36,65,107,1) 81%);
}
.english{
  width: 60%;
  background: rgb(36,65,107);
  background: linear-gradient(90deg, rgba(36,65,107,1) 0%, rgba(235,235,235,1) 81%);
}
@media (max-width: 1024px) {
.main-info{
  font-size: 14px;
}
.about-me{
  padding: 5vmin 8vmin;
}

.name{
  font-size: 24px;
}
.studies-and-experience{
  padding: 2vmin 8vmin;
}
}
@media (max-width: 768px) {
  .se{
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: 12px;
  }
  .main-info{
  font-size: 14px;
}
}
</style>
