<template>
  <v-card height="500">
    <v-img :src="image" cover height="350"></v-img>
    <VCardTitle class="text-white text-decoration-none text-center">
      {{ name }}
    </VCardTitle>
    <v-card-subtitle class="text-center">${{ price }}</v-card-subtitle>
    <v-card-text class="text-center">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {

    type: Boolean,
    default: () => true
  }
})
</script>
