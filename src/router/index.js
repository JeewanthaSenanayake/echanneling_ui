import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue'
import TestView from '@/views/TestView.vue'
import AdminView from '@/views/AdminView.vue'
import DoctorView from '@/views/DoctorView.vue'
import LabView from '@/views/LabView.vue';
import PatientView from '@/views/PatientView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path:'/admin/dashboard',
    name:'AdminView',
    component:AdminView
  },
  {
    path:'/doctor/dashboard',
    name:'DoctorView',
    component:DoctorView
  },
  {
    path:'/lab/dashboard',
    name:'LabAssistantView',
    component:LabView
  },{
    path:'/paitient/dashboard',
    name:'PatientView',
    component:PatientView
  },
  {
    path: '/testing',
    name: 'TestView',
    component: TestView
  },
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
