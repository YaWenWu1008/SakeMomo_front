<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h1>我的訂位</h1>
      </v-col>
      <!-- <v-divider></v-divider> -->
      <v-col class="text-center mt-16 mb-10">
        <p>店家確認訂位後，訂位確認會顯示 true</p>
        <p>若需取消訂位，請聯絡我們 02 2703 7507</p>
      </v-col>
      <v-col cols="12" class="mt-16 mb-10">
        <v-table>
          <thead>
            <tr>
              <th><strong>姓名</strong></th>
              <th><strong>手機號碼</strong></th>
              <th><strong>人數</strong></th>
              <th><strong>日期時間</strong></th>
              <th><strong>訂位確認</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation._id">
              <td>{{ reservation.name }}</td>
              <td>{{ reservation.phoneNumber }}</td>
              <td>{{ reservation.peopleNumber }}</td>
              <td>{{ reservation.dateTime }}</td>
              <td>{{ reservation.confirmed }}</td>
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
    const { data } = await apiAuth.get('/reservation')
    reservations.value = data.result
  } catch (error) {
    console.log(error)
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
