import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import Login from './views/Login.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard,},
    { path: '/projects', name: 'projects', component: Projects},
    { path: '/team',name: 'Team',component: Team},
    { path: '/login',name: 'login',component: Login}
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  
  const loggedIn = localStorage.getItem('user'); // ???

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  // api reqest / check status
  next();
})


export default router;