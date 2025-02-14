<template>
  <div class="project-component">
    <div class="project-showcase" v-if="project">
      <div class="project-header">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-motto">{{ project.motto }}</p>
      </div>

      <div class="row image-section">
  <div 
    :class="{'col-lg-2': project.projectImages.length !== 1, 'col-lg-8 mx-auto': project.projectImages.length === 1}" 
    v-for="(image, index) in project.projectImages" 
    :key="index"
  >
    <img 
      :src="image" 
      alt="Project Image" 
      class="img-fluid project-image" 
    />
  </div>
</div>

      <div class="project-description">
        <p class="paragraph" v-html="project.description"></p>

        <div class="project-details1">
          <div class="pd det">
            <h2 class="pd-title">Responsibilities</h2>
            <ul class="pd-list">
              <li v-for="(responsibility, index) in project.responsibilities" :key="index" class="list-item">{{ responsibility }}</li>
            </ul>
          </div>
          <hr class="divider" />
          <div class="pd det">
            <h2 class="pd-title">Timeline</h2>
            <p class="list-item">{{ project.timeline }}</p>
          </div>
          <hr class="divider" />
          <div class="pd det">
            <h2 class="pd-title">Tools</h2>
            <ul class="pd-list">
              <li v-for="(tool, index) in project.tools" :key="index" class="list-item">{{ tool }}</li>
            </ul>
          </div>
        </div>

        <div class="project-details2">
          <div class="pd">
            <h2 class="pd-title">The problem 🤔</h2>
            <p class="paragraph">{{ project.problem }}</p>
          </div>
          <div class="pd">
            <h2 class="pd-title">The goal 🎯</h2>
            <p class="paragraph">{{ project.goal }}</p>
          </div>
        </div>
      </div>

      <hr class="h-divider">
      <h1 class="sec-title"> Understanding the User and the Problem 🔎</h1>

      <div class="research-section">
        <p class="paragraph" v-html="project.research"></p>
        <div class="user-survey">
  <!-- If there are more than 1 image and no insights, display only the image with 100% width -->
  <div class="row survey-images" v-if="project.surveyImages.length >= 1 && project.insights.length === 0">
    <div class="col-12">
      <img :src="project.surveyImages[0]" alt="Survey Image" class="img-fluid survey-image w-100" />
    </div>
  </div>

  <!-- If there is 1 image and there are insights, display image and insights side by side -->
  <div class="row survey-images" v-if="project.surveyQuestions && project.surveyImages.length===0">
    <div class="col-md-6 survey-insights">
      <ul class="in-list sq-list">
        <li v-for="(question, index) in project.surveyQuestions" :key="index" class="list-item sq">{{ question }}</li>
      </ul>
    </div>
    <div class="col-md-6 survey-insights">
      <ul class="in-list">
        <li v-for="(insight, index) in project.insights" :key="index" class="list-item">{{ insight }}</li>
      </ul>
    </div>
  </div>

  <!-- If there are more than 2 images, display first row with 2 images and second row with an image + insights -->
  <template v-if="project.surveyImages.length > 2">
    <!-- First row with two images -->
    <div class="row survey-images">
      <div class="col-md-6" v-for="(image, index) in project.surveyImages.slice(0, 2)" :key="'img-' + index">
        <img :src="image" alt="Survey Image" class="img-fluid survey-image w-100" @click="openModal(image)"/>
      </div>
    </div>
    <!-- Second row with an image and insights -->
    <div class="row survey-images">
      <div class="col-md-6" v-for="(image, index) in project.surveyImages.slice(2, 3)">
        <img :src="project.surveyImages[2]" alt="Survey Image" class="img-fluid survey-image w-100" @click="openModal(image)" />
      </div>
      <div class="col-md-6 survey-insights">
        <ul class="in-list">
          <li v-for="(insight, index) in project.insights" :key="'insight-' + index" class="list-item">
            {{ insight }}
          </li>
        </ul>
      </div>
    </div>
  </template>
</div>


        <div class="user-persona" v-if="project.persona">
          <p class="paragraph" v-html="project.persona" ></p>
          <img :src="project.personaImage" alt="Persona Image" class="persona-image" v-if="project.personaImage" />
        </div>
        <div class="audit" v-if="project.audit">
          <p class="paragraph" v-html="project.audit"></p>
          <img :src="project.auditImage" alt="Audit Image" class="audit-image" v-if="project.auditImage" />
        </div>
        <div class="sitemap">
          <p class="paragraph" v-html="project.sitemap"></p>
          <img :src="project.sitemapImage" alt="Sitemap Image" class="sitemap-image" v-if="project.sitemapImage" />
        </div>
      </div>
   
      <hr class="h-divider">
      <h1 class="sec-title"> Design Evolution </h1>

      <div class="design-section">

        <div class="wireframes" v-if="project.paperWireframesImage && project.digitalWireframesImage" >
          <div class="paper-wireframes">
            <h2 class="pd-title"> Paper Wireframes </h2>
            <img :src="project.paperWireframesImage" alt="Paper Wireframes Image" class="wireframe-image" />
            <ul class="pro-list">
              <li v-for="(wireframe, index) in project.paperWireframes" :key="index" class="list-item">{{ wireframe }}</li>
            </ul>
          </div>
          <div class="arrow">
            <img src="@/assets/images/arrowComp.png" alt="Arrow" class="arrow-image" />
          </div>
          <div class="digital-wireframes"> 
            <h2 class="pd-title"> Digital Wireframes </h2>
            <img :src="project.digitalWireframesImage" alt="Digital Wireframes Image" class="wireframe-image" />
            <ul class="pro-list">
              <li v-for="(wireframe, index) in project.digitalWireframes" :key="index" class="list-item">{{ wireframe }}</li>
            </ul>
          </div>
        </div>
        <h2 class="assets-title"> UI Assets Samples</h2>
        <div class="assets">
          <img :src="isMobile ? project.mobileAssets : project.UIassetsImage" alt="UI Assets Image" class="assets-image" v-if="project.UIassetsImage" />
        </div>
        
        <h2 class="sec-title"> High Fidelity Prototypes 🔥</h2> 

        <PrototypeComponent v-if="isMobile"/>
    <div class="prototypes" v-else-if="project.prototypeImage.length">
    <div v-if="project.prototypeImage.length <= 8" class="prototype-grid pg-8">
      <div class="grid-row">
        <div class="grid-col" >
          <img v-for="(image, index) in project.prototypeImage.slice(0, 2)" :key="index" :src="image" class="prototype-image" @click="openModal(image)" />
        </div>
        <div class="grid-col">
          <img :src="project.prototypeImage[2]" v-if="project.prototypeImage[2]" class="prototype-image" @click="openModal(project.prototypeImage[2])" />
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col">
          <img :src="project.prototypeImage[3]" v-if="project.prototypeImage[3]" class="prototype-image" @click="openModal(project.prototypeImage[3])" />
        </div>
        <div class="grid-col">
          <img v-for="(image, index) in project.prototypeImage.slice(4, 8)" :key="index" :src="image" class="prototype-image" @click="openModal(image)" />
        </div>
      </div>
    </div>

    <div v-if="project.prototypeImage.length >= 14" class="prototype-grid pg-14">
      <div class="grid-row">
        <div class="grid-col" >
          <img v-for="(image, index) in project.prototypeImage.slice(0, 4)" :key="index" :src="image" class="prototype-image " @click="openModal(image)" />
        </div>
        <div class="grid-col">
          <img v-for="(image, index) in project.prototypeImage.slice(4, 7)" :key="index" :src="image" class="prototype-image " @click="openModal(image)" />
        </div>
      </div>
      <div class="grid-row" >
        <div class="grid-col">
          <img v-for="(image, index) in project.prototypeImage.slice(7, 10)" :key="index" :src="image" class="prototype-image " @click="openModal(image)" />
        </div>
        <div class="grid-col" >
          <img v-for="(image, index) in project.prototypeImage.slice(10, 14)" :key="index" :src="image" class="prototype-image " @click="openModal(image)" />
        </div>
      </div>
    </div>
  </div>

        <div class="roundup">
          <ul class="prototype-roundup">
            <li v-for="(prototype, index) in project.prototype" :key="index" class="list-item">{{ prototype }}</li>
          </ul>

          <ul class="evaluations">
            <li v-for="(evaluation, index) in project.evaluations" :key="index" class="list-item">{{ evaluation }}</li>
          </ul>

          <div class="n-steps" v-if="project.nextSteps.length > 1">
            <h2 class="sec-title"> Next Steps </h2>
            <ul class="next-steps">
              <li v-for="(step, index) in project.nextSteps" :key="index" class="list-item">{{ step }}</li>
            </ul>
          </div>
        </div>  
      </div>

      <hr class="h-divider">
      <h1 class="sec-title"> Final Takeaways  🎉 </h1>

      <div class="final-takeaways">
      <p class="paragraph" v-html="project.finalTakeaways"></p>
      </div>
      <div class="project-link" v-if="project.projectLink">
        <p class="paragraph"> You can try out this project and experience it live by visiting <a :href="project.projectLink" target="_blank" class="link">this link</a>. Give it a go!  😊</p>
      </div>
     
    </div>
    <div v-else>
      <p>Loading project details...</p>
    </div>

    <div v-if="modalOpen" class="modal" @click="closeModal">
    <div class="image-bg">
      <img :src="modalImage" class="modal-content" @click.stop />
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '/public/data/projects.json';
import PrototypeComponent from './PrototypeComponent.vue';

const props = defineProps({
  projectId: String,
});

const project = ref(null);
const route = useRoute();
const modalOpen = ref(false);
const modalImage = ref('');

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};


onMounted(() => {
  console.log("Route param projectId:", route.params.projectId);
  const projectId = props.projectId || route.params.projectId;
  project.value = projectsData.find((p) => p.projectId == projectId);

  window.addEventListener('resize', handleResize);
});

const openModal = (imageSrc) => {
  modalImage.value = imageSrc;
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};
</script>

<style scoped>
.project-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vmin 0;
  gap: 4vmin;
}

.project-header, .project-description, .research-section, .wireframes, .assets-title{
  padding: 0 16vmin;
}

.project-showcase .col-lg-2 {
  width: 15%;
}

.project-title {
  font-size: 4rem;
  color: var(--primary-blue);
}
.project-motto {
  font-style: italic;
  color: #555;
}
.paragraph{
  font-size: 1.8vmin;
  font-family: 'Nunito', sans-serif;
}

.image-section{
  display: flex;
  justify-content: center;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,214,214,1) 60%);
  padding: 5vmin 16vmin;
}

.project-image{
  max-height: 45vh;
}
.project-description, .user-survey{
  display: flex;
  flex-direction: column;
}

.project-description{
  gap: 4vmin;
}
.pd{
  display: flex;
  flex-direction: column;
  flex:1;
  gap: 1vmin;
}
.det{
  align-items: center; 
}
.project-header {
  width: 100%;
  display: flex;
  flex-direction: column; 
}
.project-content {
  display: flex;
  flex-direction: column;
}
.project-details1{
  width: 100%;
  display: grid;
  grid-template-columns: 33% 0.3vmin 33% 0.3vmin 33%;
}

 .user-persona{
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 4vmin;
  align-items: center;
} 
.persona-image{
  width: 90%;  
}
.divider, .h-divider{
  border: var(--light-blue) solid 0.3vmin;
}

.h-divider{
  margin: 4vmin 16vmin;
}

.research-section{
  display: flex;
  flex-direction: column;
  gap: 5vmin;
}

.user-survey{
  width: 100%;
  align-items: center;
}
.survey-images{
  width: 80%;
}

.survey-insights{
  display: flex;
  flex-direction: column;
  gap: 2vmin;
  padding: 5vmin 4vmin;
}

.audit, .sitemap{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vmin;
}

.wireframes {
  display: grid;
  grid-template-columns: 45% 10% 45%; 
}
 .paper-wireframes, .digital-wireframes{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vmin;
}

.assets{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(197,212,234,1) 40%);
  padding: 5vmin 16vmin;
  display: flex;
  justify-content: center;

}

.prototypes{
  width: 100%;
}

.roundup{
  display: flex;
  flex-direction: column;
  gap: 2vmin
}

.pd-list{
  display: flex;
  gap: 1vmin;
  list-style-type: none;
  padding: 0;
}

.pro-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vmin;
  padding: 0 1vmin 0 ;
}

.list-item {
  font-size: 1.5vmin;
  font-family: 'Nunito', sans-serif;
  font-style: italic;
  color: var(--text-charcoal);
}


.design-section{
  display: flex;
  flex-direction: column;
  gap: 4vmin;
}
.up, .wireframe-image{
  display: flex;
  width: 100%;
  justify-content: center;
}

.audit-image {
  width: 30%;
}
.sitemap-image{
  width: 70%;
}
.assets-image{
  width: 80%;
}

.r1, .r2, .r3, .r4{
  justify-content: center;
}

.fr, .sr {
  display: flex;
  justify-content: center;
}

.sec-title, .evaluations, .prototype-roundup, .next-steps, .final-takeaways, .project-link{
  padding: 0 16vmin !important;
}

.evaluations li:first-child, .prototype-roundup li:first-child, .in-list li:first-child{
  color: var(--primary-blue);
  list-style: none;
  font-size: 1.8vmin;
  padding: 1vmin 0;
  font-style: normal;
}

.evaluations li:not(:first-child)::marker, .prototype-roundup li:not(:first-child)::marker, .next-steps li::marker, .in-list li:not(:first-child)::marker, .pro-list li::marker{
  content: "👉  " ;
  font-size: 1.4vmin;
}
.sq-list li:not(:first-child)::marker{
  content: "👀  " ;
}

.sq-list li:not(:first-child){
  font-size: 1.8vmin;
  padding: 1vmin 0;
  font-style: italic;
  color: var(--primary-blue);
  font-weight: 600;
}
.arrow{
  display: flex;
  align-items: center;
  justify-content: center;
}



.link{
  color:  var(--text-charcoal);
  text-decoration: none;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(250,214,214,1) 81%);
  cursor: pointer;
}
.link:hover{
  text-decoration: none;
  color:  var(--text-charcoal);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(197,212,234,1) 81%);
  transition: all 0.3s ease;
}

.prototype-grid {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(69,73,106,1) 71%);
  padding: 5vmin 16vmin;
  width: 100%;
  display: flex;  
  flex-direction: column;
  gap: 3vmin
}
/* General styles for the prototype images */

.grid-row {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3vmin
}
.grid-col{
  display: flex;
  gap: 1vmin
}

.prototype-image{
  max-height: 35vmin;
  cursor: pointer;
}




.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10%;
  overflow: hidden;
}

.modal-content {
  object-fit: contain;
  background:rgba(0, 0, 0, 0.3);
  padding: 2%;
}


@media (max-width: 1024px) {
  .image-section{
    padding: 1.66rem;
    --bs-gutter-x: 0.5rem !important;
  }

  .project-showcase .col-lg-2 {
    width: 20%;
}
  .project-header, .project-description, .research-section, .wireframes{
  padding: 0 1.66rem;
}
.project-title{
  font-size: 1.5rem;
}
.project-motto{
  font-size: 0.8rem;
}
.paragraph{
  font-size: 1rem;
}
.project-details1{
  
}
.pd-list{
  flex-direction: column;
}
.pd-title, .assets-title{
  font-size: 1rem;
}
.list-item{
  font-size: 0.8rem;
}
.project-details2{
  flex-direction: column;
}
.sec-title, .evaluations, .prototype-roundup, .next-steps, .final-takeaways, .project-link, .assets-title{
  padding: 0 1.66rem !important;
}
.survey-image, .arrow{
  display: none;
}
.survey-images, .persona-image, .audit-image, .sitemap-image{
  width: 100%;
}
.survey-insights{
  padding: 0;
}
.in-list li[data-v-95b24602]:first-child, .prototype-roundup li:first-child, .in-list li:first-child, .evaluations li:first-child {
  font-size: 1rem;
}
.user-persona, .wireframes{
  grid-template-columns: 1fr;
}
.paper-wireframes, .digital-wireframes{
  align-items: start;
}
.assets{
  padding: 1.66rem;
}
.assets-image{
  width: 100%;
}
.evaluations li:not(:first-child)::marker, .prototype-roundup li:not(:first-child)::marker, .next-steps li::marker, .in-list li:not(:first-child)::marker, .pro-list li::marker{
  font-size: 1rem;
}
.roundup, .pro-list{
  padding: 0 1.66rem;
}
.sec-title{
  font-size: 1.5rem;
}
.sq-list li:not(:first-child){
  font-size: 0.8rem;
}
}
</style>
