import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { apiAuth } from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const phoneNumber = ref('')
  const role = ref(UserRole.USER)

  const login = (data) => {
    token.value = data.token
    account.value = data.account
    email.value = data.email
    phoneNumber.value = data.phoneNumber
    role.value = data.role
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const avatar = computed(() => {
    return `https://source.boringavatars.com/marble/120/${account.value}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`
  })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      phoneNumber.value = data.result.phoneNumber
      role.value = data.result.role
    } catch (error) {
      token.value = ''
    }
  }

  const logout = () => {
    token.value = ''
    account.value = ''
    email.value = ''
    phoneNumber.value = ''
    role.value = UserRole.USER
  }

  return {
    token,
    account,
    email,
    phoneNumber,
    role,
    login,
    isLogin,
    isAdmin,
    avatar,
    getProfile,
    logout
  }
}, {
  persist: {
    key: '20230720',
    paths: ['token']
  }
})
