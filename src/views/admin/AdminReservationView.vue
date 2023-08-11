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
              <td><v-checkbox v-model="reservation.confirmed"
                  @change="updateConfirmation(reservation._id, reservation.confirmed)"></v-checkbox></td>
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

const reservations = ref([])

const updateConfirmation = async (reservationId, confirmed) => {
  try {
    const response = await apiAuth.patch(`/reservation/${reservationId}`, {
      confirmed
    })

    if (response.data.success) {
      createSnackbar({
        text: '訂位狀態已更新',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'success',
          location: 'bottom'
        }
      })

      // 更新客户端的预订数据，以反映最新的确认状态
      const updatedReservation = reservations.value.find(r => r._id === reservationId)
      if (updatedReservation) {
        updatedReservation.confirmed = confirmed
      }
    }
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

(async () => {
  try {
    const { data } = await apiAuth.get('/reservation/all')
    reservations.value = data.result
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
