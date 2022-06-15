import Vue from 'vue'
import VueRouter from 'vue-router'

import ToursView from '../views/ToursView'
import SingleView from '../views/SingleView'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: ToursView
  },
  {
    name: 'tours',
    path: '/:id',
    component: SingleView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router