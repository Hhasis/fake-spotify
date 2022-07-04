import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/pages/MainPage"),
    children: [
      {
        path: "/home-page",
        name: "HomePage",
        component: () => import("@/pages/HomePage")
      },
      {
        path: "/library-page",
        name: "LibraryPage",
        component: () => import("@/pages/LibraryPage")
      },
      {
        path: "/search-page",
        name: "SearchPage",
        component: () => import("@/pages/SearchPage")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
