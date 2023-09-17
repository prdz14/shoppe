import { createWebHistory, createRouter } from "vue-router";


import HomePage from "@/pages/HomePage.vue";
export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/shop', name: 'shop', component: () => import('@/pages/ShopPage.vue') },
    { path: '/blog', name: 'blog', component: () => import('@/pages/BlogPage.vue') },
    { path: '/shop/:id', name: 'current', component: () => import('@/pages/CurrentPage.vue') },
  ]
})