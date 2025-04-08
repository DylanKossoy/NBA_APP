import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const userToken = ref('')

  const userData = reactive({
    username: '',
    email: '',
    favoritePlayers: [],
    favoriteTeams: [],
    betIds: [],
    avatarImg: '',
  })

  function setUserData(data, image) {
    userToken.value = data.token
    userData.username = data.user.username
    userData.email = data.user.email
    userData.favoritePlayers = data.user.favoritePlayers
    userData.favoriteTeams = data.user.favoriteTeams
    userData.betIds = data.user.betIds
    userData.avatarImg = image
  }

  function logout() {
    userToken.value = null
    userData.username = ''
    userData.email = ''
    userData.favoritePlayers = []
    userData.favoriteTeams = []
    userData.betIds = []
    userData.avatarImg = ''
  }

  return {
    userToken,
    userData,
    setUserData,
    logout,
  }
})
