import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/builder/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';

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
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },
  ],
});
