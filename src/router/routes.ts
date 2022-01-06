import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Frame',
    path: '/',
    redirect: '/home',
    component: () => import('../views/Frame.vue'),
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        name: 'Book',
        path: '/book',
        component: () => import('../views/Book.vue')
      },
      {
        name: 'Personal',
        path: '/personal',
        component: () => import('../views/Personal.vue')
      }
    ]
  },
  {
    name: 'List',
    path: '/list',
    component: () => import('../views/List.vue')
  }
]

export default routes