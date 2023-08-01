<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>菜單介紹</h1>
      </v-col>
      <v-col cols="12">
        <h2>燒物</h2>
      </v-col>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" v-if="product.category === '燒物'"></ProductCard>
      </v-col>

      <v-col cols="12">
        <h2>酒</h2>
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
