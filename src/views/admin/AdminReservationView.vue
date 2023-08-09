<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>手機號碼</th>
              <th>人數</th>
              <th>日期時間</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation._id">
              <td>{{ reservation._id }}</td>
              <td>{{ reservation.name }}</td>
              <td>{{ reservation.phoneNumber }}</td>
              <td>{{ reservation.peopleNumber }}</td>
              <td>{{ reservation.dateTime }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref, onMounted } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const reservations = ref([])

onMounted(async () => {
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
})
</script>
