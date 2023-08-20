<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>個人資料</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-table>
          <tbody>
            <tr>
              <td><strong>帳號</strong></td>
              <td>{{ account }}</td>
            </tr>
            <tr>
              <td><strong>e-mail</strong></td>
              <td>{{ email }}</td>
            </tr>
            <tr>
              <td><strong>手機號碼</strong></td>
              <td>{{ phoneNumber }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="editUserDialog" class="text-center">
    <template v-slot:activator="{ on }">
      <div class="text-center">
        <v-btn color="green-darken-3" v-on="on" @click="showDialog(user)">編輯</v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>編輯資料</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedUser.account" label="帳號"></v-text-field>
        <v-text-field v-model="editedUser.email" label="e-mail"></v-text-field>
        <v-text-field v-model="editedUser.phoneNumber" label="手機號碼"></v-text-field>
        <v-text-field v-model="editedUser.password" label="修改密碼" type="password"></v-text-field>
        <v-text-field v-model="editedUser.password" label="確認密碼" type="password"></v-text-field>

      </v-card-text>
      <v-card-actions>
        <v-btn color="green" @click="updateUser">儲存</v-btn>
        <v-btn color="red" @click="editUserDialog = false">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { account, email, phoneNumber } = storeToRefs(user)
const createSnackbar = useSnackbar()

const editedUser = ref({})
const editUserDialog = ref(false)

const showDialog = (user) => {
  editedUser.value = { ...user }
  editUserDialog.value = true
}

const updateUser = async () => {
  try {
    const { data } = await apiAuth.patch(`/users/${editedUser.value._id}`, {
      account: editedUser.value.account,
      email: editedUser.value.email,
      phoneNumber: editedUser.value.phoneNumber,
      password: editedUser.value.password
    })
    console.log({ data })
    editUserDialog.value = false
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
}
</script>
