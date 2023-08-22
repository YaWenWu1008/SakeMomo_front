<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">菜單介紹</h1>
        <div class="menu d-flex">
          <p><a @click="scrollToSection('#a1')">開胃小食</a></p>
          <p><a @click="scrollToSection('#a2')">生食 & 沙拉</a></p>
          <p><a @click="scrollToSection('#a3')">酒桃塔可</a></p>
          <p><a @click="scrollToSection('#a4')">燒物</a></p>
          <p><a @click="scrollToSection('#a5')">揚物</a></p>
          <p><a @click="scrollToSection('#a6')">食事 & 吸物</a></p>
          <p><a @click="scrollToSection('#a7')">甜點</a></p>
          <p><a @click="scrollToSection('#a8')">夜場限定</a></p>
          <p><a @click="scrollToSection('#a9')">酒</a></p>
        </div>
      </v-col>
      <v-divider></v-divider>

      <v-col cols="12" id="a1">
        <h2>開胃小食</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '開胃小食'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a2">
        <h2>生食 & 沙拉</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '生食&沙拉'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a3">
        <h2>酒桃塔可</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '酒桃塔可'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a4">
        <h2>燒物</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '燒物'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a5">
        <h2>揚物</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '揚物'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a6">
        <h2>食事 & 吸物</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '食事&吸物'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a7">
        <h2>甜點</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '甜點'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a8">
        <h2>夜場限定</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '夜場限定'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>

      <v-col cols="12" id="a9">
        <h1>酒</h1>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="3" v-if="product.category === '酒'" data-aos="fade-up" data-aos-duration="1000">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>
      </template>
    </v-row>
    <v-col class="text-center">
      <v-btn to="/reservation" color="secondary">立即訂位</v-btn>
    </v-col>
  </v-container>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const createSnackbar = useSnackbar()

const products = ref([])

AOS.init();

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

const scrollToSection = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
