import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoFooter from '../components/TodoFooter.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import UserLogin from '../components/user/UserLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/footer',
    name: 'footer',
    component: TodoFooter
  },
  {
    path: '/input',
    name: 'input',
    component: TodoInput
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/list',
    name: 'list',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
