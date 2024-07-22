import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
//   {
//     path: '/testing',
//     name: 'TestingView',
//     component: TestingView
//   },
//   {
//     path: '/production_history',
//     name: 'HistoryView',
//     component: HistoryView
//   },
//   {
//     path: '/view_product/:id',
//     name: 'ProductView',
//     component: ProductView
//   }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
