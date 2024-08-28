<template>
  <BaseSection class="contact-section">
    <div class="contactContainer">
      <h2 class="contactTitle">Let's get in touch</h2>
      <p class="contactMessage">
        I am available for work. <br />
        You can write me a message,
        <a class="gmail" href="mailto:samaiagahramanov@gmail.com?subject=Hello from your website">
          email me directly</a
        >
        or find me on
        <a href="https://www.linkedin.com/in/samaia-gahramanov-569343232/"> Linkedin</a>.
      </p>
      <form class="contactForm">
        <div class="form-fields">
          <div class="name-and-email">
            <div class="name">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="firstname"
                  required
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="lastname"
                  required
                />
                <label for="floatingInput">Last Name</label>
              </div>
            </div>
            <div class="email form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="email"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
          </div>
          <div class="message form-group mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>
        <BaseButton type="submit" class="submit-btn">Send</BaseButton>
      </form>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>
<style scoped>
.contactContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #393737;
  gap: 3vmin;
}
.contactTitle {
  font-size: 5vmin;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}
.contactMessage {
  font-size: 2vmin;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  line-height: 120%;
  letter-spacing: 0.1vmin;
  text-align: center;
}
.contactForm {
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 8vmin;
}

.name {
  display: flex;
  justify-content: space-between;
  gap: 5vmin;
}
.name-and-email {
  display: flex;
  flex-direction: column;
}
.form-fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vmin;
  margin: 5vmin 0;
}
.form-control {
  width: 100%;
  font-size: 2vmin;
  font-family: 'Raleway', sans-serif;
  padding: 2vmin 4vmin;
}
.form-floating {
  width: 100%;
}
</style>
