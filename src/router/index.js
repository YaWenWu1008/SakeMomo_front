// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '酒桃 Sakemomo',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/front/RegisterView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/front/LoginView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import(/* webpackChunkName: "AboutUs" */ '@/views/front/AboutUsView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/front/MenuView.vue'),
        meta: {
          title: '酒桃 Sakemomo | MENU',
          login: false,
          admin: false
        }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/front/ContactView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 聯絡我們',
          login: true,
          admin: false
        }
      },
      {
        path: 'reservation',
        name: 'Reservation',
        component: () => import(/* webpackChunkName: "reservation" */ '@/views/front/ReservationView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 線上訂位',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/AdminHomeView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminmenu',
        name: 'AdminMenu',
        component: () => import(/* webpackChunkName: "admin-menus" */ '@/views/admin/AdminMenuView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 菜單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminReservation',
        name: 'AdminReservation',
        component: () => import(/* webpackChunkName: "admin-menus" */ '@/views/admin/AdminReservationView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 訂位管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'adminUser',
        name: 'AdminUser',
        component: () => import(/* webpackChunkName: "admin-users" */ '@/views/admin/AdminUserView.vue'),
        meta: {
          title: '酒桃 Sakemomo | 會員管理',
          login: true,
          admin: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  // 剛進網頁時的第一次路由跳轉
  if (from === START_LOCATION) {
    // 取得使用者資訊
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，去註冊或登入頁，導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果沒登入，去需要登入的頁面，導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果不是管理員，去需要管理員，導向回首頁
    next('/')
  } else {
    // 不做導向
    next()
  }
})

export default router
