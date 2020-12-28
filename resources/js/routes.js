import VueRouter from "vue-router"
import ExampleComponent from "./components/ExampleComponent"
import secondComponent from "./components/Example2"

const routes = [
  {
    path: '/',
    name: 'home',
    component: ExampleComponent
  },

  {
    path: '/sec',
    name: 'sec',
    component: secondComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router