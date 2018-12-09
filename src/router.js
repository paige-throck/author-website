// Routes
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Author from '@/components/Author'
import Books from '@/components/Books'
import Mayan from '@/components/Mayan'
import Accord from '@/components/Accord'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/mayan',
      name: 'Mayan',
      component: Mayan
    },
    {
      path: '/books/accord',
      name: 'Accord',
      component: Accord
    }
  ]
})
