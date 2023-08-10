<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>訂位管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>手機號碼</th>
              <th>人數</th>
              <th>日期時間</th>
              <th>訂位確認</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation._id">
              <td>{{ reservation._id }}</td>
              <td>{{ reservation.name }}</td>
              <td>{{ reservation.phoneNumber }}</td>
              <td>{{ reservation.peopleNumber }}</td>
              <td>{{ reservation.dateTime }}</td>
              <td><v-checkbox v-model="reservation.confirmed"></v-checkbox></td>
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

const reservations = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/reservation/all')
    reservations.value = data.result.map(reservation => ({
      ...reservation, confirmed: false
    }))
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
