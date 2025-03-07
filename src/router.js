import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; 
import SearchPage from './components/SearchPage.vue'; 
import ReportForm from './components/ReportForm.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/report', component: ReportForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

