import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ListedPortfolioView from '@/views/ListedPortfolioView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'
import CssFun from '@/views/CssFun.vue'
import SomeProjects from '@/views/SomeProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
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
      path: '/projects',
      name: 'projects',
      component: SomeProjects
    }
  ]
})

export default router
