import { createWebHistory, createRouter } from 'vue-router';
import HomeDashboard from './pages/HomeDashboard.vue';
import DigitalDivide from './pages/DigitalDivide.vue';
import WhatWeDo from './pages/WhatWeDo.vue';
import InSights from './pages/InSights.vue';
import GetInvolved from './pages/GetInvolved.vue';
import OutNetwork from './pages/OutNetwork.vue';
import HeaderLayout from './layouts/HeaderLayout.vue';

const routes = [
  {
    path: '/',
    component: HeaderLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'HomeDashboard',
        component: HomeDashboard
      },
      {
        path: 'what-we-do',
        name: 'WhatWeDo',
        component: WhatWeDo
      },
      {
        path: 'digital-divide',
        name: 'DigitalDivide',
        component: DigitalDivide
      },
      {
        path: 'get-involved',
        name: 'GetInvolved',
        component: GetInvolved
      },
      {
        path: 'out-network',
        name: 'OutNetwork',
        component: OutNetwork
      },
      {
        path: 'in-sights',
        name: 'Insights',
        component: InSights
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;