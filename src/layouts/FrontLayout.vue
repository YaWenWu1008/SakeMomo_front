<template>
  <v-app-bar color="#863436">
    <v-container class="d-flex align-center">
      <v-btn to="/" :active="false">
        <v-img src="../assets/sakelogo.png" :width="40"></v-img>
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
  { to: '/menu', text: 'MENU' },
  { to: '/contact', text: '聯絡我們' }
]

const navItems = [
  { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !isLogin.value },
  { to: '/login', text: '登入', icon: 'mdi-login', show: !isLogin.value },
  { to: '/reservation', text: '訂位', icon: 'mdi-calendar-check', show: isLogin.value },
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
</script>
