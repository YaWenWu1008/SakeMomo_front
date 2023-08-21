<template>
  <v-app>
    <v-app-bar color="#863436">
      <v-container class="d-flex align-center">
        <v-btn to="/" :active="false">
          <v-img src="../assets/logosake2.png" :width="45" class="barlogo"></v-img>
          <!-- <p class="ml-4">酒桃</p> -->
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-for="barItem in barItems" :key="barItem.to" :to="barItem.to">{{ barItem.text }}</v-btn>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>
        <template v-if="!isMobile">
          <template v-for="navItem in navItems" :key="navItem.to">
            <v-btn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show">{{ navItem.text
            }}</v-btn>
          </template>
        </template>
        <v-btn v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout">登出</v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-if="isMobile" v-model="drawer" location="right" temporary>
      <v-list nav>
        <template v-for="navItem in navItems" :key="navItem.to">
          <v-list-item v-if="navItem.show" :to="navItem.to">
            <template #prepend>
              <v-icon :icon="navItem.icon"></v-icon>
            </template>
            <v-list-item-title>{{ navItem.text }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item v-if="isLogin" @click="logout">
          <template #prepend>
            <v-icon icon="mdi-logout"></v-icon>
          </template>
          <v-list-item-title>登出</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer fixed class="SakeFooter" style="background-color: #863436;">
      <v-row class="justify-space-between">
        <v-col class="footerFollow">
          <h4>FOLLOW US</h4>
          <a href="https://www.facebook.com/1SakeMomo/?locale=zh_TW" target="_blank"><v-icon
              icon="mdi-facebook"></v-icon></a>
          <a href="https://www.instagram.com/sakemomobistro/" target="_blank"><v-icon icon="mdi-instagram"></v-icon></a>
        </v-col>
        <v-col>
          <a href="/"><img src="../assets/sakelogo.png"></a>
        </v-col>
        <v-col>
          <v-btn variant="text" fab bottom right @click="scrollToTop">
            <v-icon icon="mdi-arrow-up-drop-circle-outline"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const barItems = [
  { to: '/aboutus', text: '關於我們' },
  { to: '/menu', text: '菜單' },
  { to: '/contact', text: '聯絡我們' }
]

const navItems = [
  { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !isLogin.value },
  { to: '/login', text: '登入', icon: 'mdi-login', show: !isLogin.value },
  { to: '/reservation', text: '訂位', icon: 'mdi-calendar-check', show: isLogin.value },
  { to: '/userCenter', text: '會員中心', icon: 'mdi-account', show: isLogin.value },
  { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
]

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
