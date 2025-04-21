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
  })

  function setUserData(data) {
    userToken.value = data.token



    if(data.user) {
      userData.username = data.user.username || ''
      userData.email = data.user.email || ''
      userData.favoritePlayers = data.user.favoritePlayers || []
      userData.favoriteTeams = data.user.favoriteTeams || []
      userData.betIds = data.user.betIds || []

    }

  }

  async function logout() {



    userToken.value = null
    userData.username = ''
    userData.email = ''
    userData.favoritePlayers = []
    userData.favoriteTeams = []
    userData.betIds = []

  }

  return {
    userToken,
    userData,
    setUserData,
    logout,
  }
})
