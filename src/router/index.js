import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import ListedPortfolioView from '@/views/ListedPortfolioView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'
import CssFun from '@/views/CssFun.vue'
import AllProjectsView from '@/views/AllProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project/:projectId', 
      name: 'projectComponent',
      component: ProjectComponent,
      props: true, 
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: ListedPortfolioView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/cssfun',
      name: 'cssfun',
      component: CssFun
    },
    {
      path: '/allprojects',
      name: 'allprojects',
      component: AllProjectsView
    }
  ]
})

export default router
