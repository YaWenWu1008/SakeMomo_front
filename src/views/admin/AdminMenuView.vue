<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">菜單管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-btn color="light-green-darken-4" @click="openDialog">新增</v-btn>
        <v-data-table-server></v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog persistent v-model="dialog" width="400">
    <v-form>
      <v-card>
        <v-card-title>新增</v-card-title>
        <v-card-text>
          <v-text-field label="名稱"></v-text-field>
          <v-text-field label="說明"></v-text-field>
          <v-text-field label="價格"></v-text-field>
          <v-select label="分類"></v-select>
          <v-checkbox label="上架"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn>取消</v-btn>
          <v-btn>送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const tableItemsPerPage = ref(5)
const tableSortBy = ref([
  {
    key: 'name',
    order: 'asc'
  }
])

const tablePage = ref(1)

const dialog = ref(false)

const openDialog = () => {
  dialog.value = true
}

// const schema = yup.object({
//   name: yup.string().required('缺少名稱'),
//   price: yup.number().required('缺少價格'),
//   discription: yup.string().required('缺少說明'),
//   category:
//     sell:
// })
</script>
