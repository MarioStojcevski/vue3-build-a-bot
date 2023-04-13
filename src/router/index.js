import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/builder/RobotBuilder.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'RobotBuilder',
      component: RobotBuilder,
    },
  ],
});
