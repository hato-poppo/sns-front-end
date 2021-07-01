import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/timeline',
    name: 'TimeLine',
    component: () => import(/* webpackChunkName: "post" */ '@/views/TimeLine.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "post" */ '@/views/User.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
