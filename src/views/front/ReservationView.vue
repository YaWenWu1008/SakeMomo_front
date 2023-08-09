<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>線上訂位</h1>
      </v-col>
      <v-col>
        <v-sheet width="70%" class="mx-auto">
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField v-model="name.value.value" :error-messages="name.errorMessage.value" label="姓名" counter
              maxlength="20"></VTextField>
            <VTextField v-model="phoneNumber.value.value" :error-messages="phoneNumber.errorMessage.value" label="手機號碼">
            </VTextField>
            <v-select v-model="peopleNumber.value.value" :error-messages="peopleNumber.errorMessage.value" label="人數"
              :items="peopleNumberOptions"></v-select>
            <vue-date-picker v-model="dateTime.value.value" :error-messages="dateTime.errorMessage.value" label="日期 & 時間"
              placeholder="日期 & 時間" dark time-picker-inline :min-time="{ hours: 18, minutes: 0 }"
              :max-time="{ hours: 23, minutes: 0 }" :day-names="['一', '二', '三', '四', '五', '六', '日']"
              :start-time="startTime" calendar-cell-class-name="dp-custom-cell"></vue-date-picker>
            <div class="text-center">
              <VBtn type="submit" color="">送出</VBtn>
            </div>
          </VForm>
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
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  name: yup
    .string()
    .required('姓名必填'),
  phoneNumber:
    yup.string().required('手機號碼必填').matches(/^09\d{8}$/, '手機格式錯誤'),
  peopleNumber: yup.number().required('人數必填'),
  dateTime: yup.string().required('日期、時間必填')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const name = useField('name')
const phoneNumber = useField('phoneNumber')
const peopleNumber = useField('peopleNumber')
const dateTime = useField('dateTime')

const submit = handleSubmit(async (values) => {
  console.log(123)
  try {
    await apiAuth.post('/reservation', {
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
})

const peopleNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const startTime = ref({ hours: 18, minutes: 0 })
</script>
