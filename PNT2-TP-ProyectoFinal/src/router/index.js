import { createRouter, createWebHistory } from 'vue-router';
import { useLoginStore } from '../stores/login';
import LoginView from '../views/LoginView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '',
      name: '',
      component: MyTurns,
      meta: { RequireAuth: true },
    },
    {
      path: '',
      name: '',
      component: Edit,
      meta: { RequireAuth: true },
    },
    {
      path: '',
      name: '',
      component: HomeView,
    },
    {
      path: '',
      name: '',
      component: Formulario,
      meta: { RequireAuth: true },
    },
    {
      path: '',
      name: '',
      component: AboutUs,
    },
    {
      path: '',
      name: '',
      component: ContactUs,
    },
    {
      path: '',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '',
      name: '',
      component: Carrito,
      meta: { RequireAuth: true },
    },


  ],
});
router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some((record) => record.meta.RequireAuth) && !store.isLogin) {
    next('/');
  } else {
    next();
  }
});

export default router;