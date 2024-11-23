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