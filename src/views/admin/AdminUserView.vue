<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>會員管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>帳號</th>
              <th>信箱</th>
              <th>手機號碼</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user._id }}</td>
              <td>{{ user.account }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phoneNumber }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const users = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.value = data.result
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
