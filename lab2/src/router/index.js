import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Login = () => import('@/pages/Login.vue')
const Register = () => import('@/pages/Register.vue')
const NotFound = () => import('@/pages/NotFound.vue')

const AdminLayout = () => import('@/layouts/AdminLayout.vue')
const Dashboard = () => import('@/pages/admin/Dashboard.vue')
const Users = () => import('@/pages/admin/Users.vue')
const UserDetail = () => import('@/pages/admin/UserDetail.vue')
const Reports = () => import('@/pages/admin/Reports.vue')

const routes = [
    { path: '/', component: Home, meta: { public: true } },
    { path: '/login', component: Login, meta: { public: true } },
    { path: '/register', component: Register, meta: { public: true } },

    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'users', component: Users },
            { path: 'user/:id', component: UserDetail },
            { path: 'reports', component: Reports },
        ],
    },

    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-link-active',
    scrollBehavior() {
        return { left: 0, top: 0 }
    },
})

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(r => r.meta?.public)
    const requiresAuth = to.matched.some(r => r.meta?.requiresAuth)
    const user = JSON.parse(localStorage.getItem('auth_user') || 'null')

    if (requiresAuth && !user && !isPublic) {
        return next({ path: '/login', query: { redirect: to.fullPath } })
    }

    if (user && (to.path === '/login' || to.path === '/register')) {
        return next('/admin/dashboard')
    }

    next()
})

export default router
