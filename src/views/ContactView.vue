<template>
  <div class="contact-view">
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

      <form class="contactForm" @submit.prevent="handleSubmit">
        <div class="form-fields">
              <div class="name form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="yourname"
                  v-model="userName"
                  required
                />
                <label for="floatingInput">your name</label>
              </div>
            <div class="email form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="email"
                v-model="userEmail"
                required
              />
              <label for="floatingInput">your email</label>
            </div>
          <div class="message form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="your message"
              v-model="message"
              required
            ></textarea>
          </div>
        </div>
        <BaseButton type="submit" class="submit-btn" :disabled="isSubmitting">{{isSubmitting ? 'sending...' : 'send message'}}</BaseButton>
      </form>
      <p v-if="submitError" class="error-message">{{submitError}}</p>

    </div>
  </BaseSection>
</div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

import BaseSection from '@/components/BaseSection.vue';
import BaseButton from '@/components/BaseButton.vue';

const userName = ref('');
const userEmail = ref('');
const message = ref('');

const isSubmitting = ref(false);
const submitError = ref('');

const serviceID = 'service_dvurih8';
  const templateID = 'template_vf5qh4m';
  const userID = 'gZN89EuNcBtTr07K4';

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    const formData = {
  from_name: userName.value, 
  from_email: userEmail.value, 
  message_html: message.value 
};

    const response = await emailjs.send(serviceID, templateID, formData, userID);

    if (response.status === 200) {
      alert('Message sent successfully!');
    } else {
      submitError.value = 'Failed to send the message. Please try again later.';
    }
  } catch (error) {
    submitError.value = 'Error occurred. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};

const validateForm = () => {
  if (!userName.value || !userEmail.value || !message.value) {
    submitError.value = 'All fields are required.';
    return false;
  }
  return true;
};
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
  font-size: 2.5vw;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}
.contactMessage {
  font-size: 1.2vw;
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
.name{
  grid-column: 1;
  grid-row:1
}
.email{
  grid-column: 1;
  grid-row: 2
}
.message{
  grid-column:  2;
  grid-row: 1/3;
}

.form-fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.9vmin;
  margin: 5vmin 0;

}
.form-control {
  width: 100%;
  font-family: 'Raleway', sans-serif;
  padding: 1rem 0.75rem;
}
.form-floating {
  width: 100%;
}
.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
a{
  text-decoration: none;
  color:#E67E22
}
a:hover {
  text-decoration: underline;
}


@media (max-width: 1024px) {
  .contactTitle {
    font-size: 32px;
  }
  .contactMessage {
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .form-fields {
    display: flex;
    flex-direction: column;
  }
  .contactContainer{
    padding: 0 5vmin;
  }
}
</style>
