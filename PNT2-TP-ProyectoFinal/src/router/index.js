import { createRouter, createWebHistory } from 'vue-router';
import { useLoginStore } from '../stores/login';

// componentes de vistas
import LoginView from '../views/LoginView.vue';
import MyTurnsView from `../views/MyTurnsView.vue`;
import EditView from `../views/EditView.vue`;
import HomeView from `../views/HomeView.vue`;
import FormularioView from `../views/FormularioView.vue`;
import ContactUsView from `../views/ContactUsView.vue`;
import NotFoundView from `../views/NotFoundView.vue`;
import AboutUsView from `../views/AboutUsView.vue`;
import Carrito from `../components/Carrito.vue`;

// Instancia router y las rutas
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/myTurns',
      name: 'myTurns',
      component: MyTurnsView,
      meta: { RequireAuth: true },
    },
    {
      path: '/myTurns/:id',
      name: 'myTurns',
      component: EditView,
      meta: { RequireAuth: true },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: FormularioView,
      meta: { RequireAuth: true },
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView,
    },
    {
      path: '/carrito',
      name: 'carrito',
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