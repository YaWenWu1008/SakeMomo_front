<template>
  <div class="centerImg">
    <h1>會員中心</h1>
  </div>
  <v-container>
    <v-row>
      <v-col>
        <div class="circleContainer">
          <template v-for="item in items" :key="item.to">
            <router-link v-if="item.show" :href="item.to" :to="item.to" class="centerCircle">
              {{ item.text }}
            </router-link>
          </template>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin } = storeToRefs(user)

const items = [
  { to: '/userView', text: '會員資料', show: isLogin.value },
  { to: '/userReservation', text: '我的訂位', show: isLogin.value }
]
</script>
