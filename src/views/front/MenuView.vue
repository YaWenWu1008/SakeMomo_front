<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">菜單介紹</h1>
        <div class="menu d-flex">
          <router-link to="#a1">
            <p class="pr-4">開胃小食</p>
          </router-link>
          <p class="pr-4">生食&沙拉</p>
          <p class="pr-4">酒桃塔可</p>
          <p class="pr-4">燒物</p>
          <p class="pr-4">揚物</p>
          <p class="pr-4">食事 & 吸物</p>
          <p class="pr-4">甜點</p>
          <p class="pr-4">夜場限定</p>
          <router-link to="#a9" class="pr-4">
            酒
          </router-link>
        </div>
      </v-col>

      <v-col cols="12">
        <h2 id="a1">開胃小食</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '開胃小食'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a2">生食 & 沙拉</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '生食&沙拉'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a3">酒桃塔可</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '酒桃塔可'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a4">燒物</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '燒物'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a5">揚物</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-if="product.category === '揚物'" v-bind="product"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a6">食事 & 吸物</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '食事&吸物'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a7">甜點</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '甜點'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2 id="a8">夜場限定</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '夜場限定'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h1 id="a9">酒</h1>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '酒'"></ProductCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard'

const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
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
})()
</script>
