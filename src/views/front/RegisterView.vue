<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>註冊</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col>
        <v-sheet width="300" class="mx-auto">
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-text-field v-model="account.value.value" :error-messages="account.errorMessage.value" label="帳號" counter
              maxlength="20"></v-text-field>
            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="信箱"
              type="email"></v-text-field>
            <v-text-field v-model="phoneNumber.value.value" :error-messages="phoneNumber.errorMessage.value"
              label="手機號碼"></v-text-field>
            <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" label="密碼" counter
              maxlength="20" type="password"></v-text-field>
            <v-text-field v-model="passwordConfirm.value.value" :error-messages="passwordConfirm.errorMessage.value"
              label="確認密碼" counter maxlength="20" type="password"></v-text-field>
            <div class="text-center">
              <v-btn type="submit" color="primary" @click="submit">註冊</v-btn>
            </div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號不能為空')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱不能為空')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  phoneNumber: yup
    .string()
    .matches(/^09\d{8}$/, '手機格式錯誤')
    .required('手機號碼不能為空'),
  password: yup
    .string()
    .required('密碼不能為空')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('請確認密碼')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const phoneNumber = useField('phoneNumber')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green-darken-3',
        location: 'bottom'
      }
    })
    router.push('/login')
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
    console.log(error)
  }
})
</script>
