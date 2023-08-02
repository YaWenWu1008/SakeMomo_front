<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>線上訂位</h1>
      </v-col>
      <v-col>
        <v-sheet width="450" class="mx-auto">
          <v-form>
            <v-text-field label="姓名" v-model="name.value.value" :error-messages="name.errorMessage.value"></v-text-field>
            <v-text-field label="手機號碼" v-model="phoneNumber.value.value"
              :error-messages="phoneNumber.errorMessage.value"></v-text-field>
            <v-select v-model="peopleNumber.value.value" :items="peopleNumberOptions" label="人數"
              :error-messages="peopleNumber.errorMessage.value"></v-select>
            <vue-date-picker v-model="dateTime" label="日期" placeholder="日期 & 時間" dark></vue-date-picker>
            <!-- <v-select v-model="selectedTime" :items="timeOptions" label="時間"></v-select> -->
            <div class="text-center">
              <v-btn type="submit" @submit="submit" :disabled="isSubmitting" color="primary">送出</v-btn>
            </div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()
// const date = ref()

const schema = yup.object({
  name: yup.string().required('姓名必填'),
  phoneNumber: yup.string().required('手機號碼必填').matches(/^09\d{8}$/, '手機格式錯誤'),
  peopleNumber: yup.number().required('人數必填'),
  date: yup.string().required('日期、時間必填')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const name = useField('name')
const phoneNumber = useField('phoneNumber')
const peopleNumber = useField('peopleNumber')
const dateTime = ref()

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      name: values.name,
      phoneNumber: values.phoneNumber,
      peopleNumber: values.peopleNumber,
      dateTime: values.dateTime
    })
    createSnackbar({
      text: '訂位成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green-darken-3',
        location: 'bottom'
      }
    })
    router.push('/')
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

const peopleNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
</script>
