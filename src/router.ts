import { createWebHistory, createRouter } from 'vue-router';
import HomeDashboard from './views/HomeDashboard.vue';
import DigitalDivide from './views/DigitalDivide.vue';
import WhatWeDo from './views/WhatWeDo.vue';
import InSights from './views/InSights.vue';
import GetInvolved from './views/GetInvolved.vue';
import OutNetwork from './views/OutNetwork.vue';
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