import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import * as _ from 'esfract'

import Home from './views/Home.vue'
// import Math from './views/Math.vue'
// import Biology from './views/Biology.vue'
// import Chemistry from './views/Chemistry.vue'
// import Physics from './views/Physics.vue'
// import Coding from './views/Coding.vue'

const pages = [
  'Math',
  'Biology',
  'Chemistry',
  'Physics',
  'Coding',
  ['Math', 'Algebra'],
]

const nodes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }
]
for (const page of pages) {
  if (typeof page === 'string') {
    nodes.push({
      name: page,
      path: `/${page}`,
      component: import(`./views/${page}.vue`),
    })
  } else {
    nodes.push({
      name: _.last(page),
      path: `/${page.join('/')}`,
      component: import(`./views/${_.last(page)}.vue`)
    })
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: nodes,
})

createApp(App)
  .use(router)
  .mount('#app')