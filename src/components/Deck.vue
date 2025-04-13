<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()

const emit = defineEmits(['playerChoice'])

const favoritePlayers = ref(true)
const favoriteTeams = ref(false)

const favoriteTeamImg = ref('../../public/mavsLogo.svg')

const userFavoritePlayers = ref([])

userFavoritePlayers.value = store.userData.favoritePlayers

const removeFavoritePlayer = (player) => {
  for (let i = 0; i < userFavoritePlayers.value.length; i++) {
    if (player === userFavoritePlayers.value[i]) {
      userFavoritePlayers.value.splice(i, 1)
      console.log('removed')
      return
    }
  }
}

// toggling favorite players or teams
const togglePlayers = () => {
  favoriteTeams.value = false
  favoritePlayers.value = true
}

const toggleTeams = () => {
  favoritePlayers.value = false
  favoriteTeams.value = true
}

const showDetails = (player) => {
  emit('playerChoice', player)
}
</script>

<template>
  <div class="favoriteOptions">
    <button @click="togglePlayers" class="favoriteOptionButton">Players</button>
    <button @click="toggleTeams" class="favoriteOptionButton">Teams</button>
  </div>
  <div class="team-cards-container" v-if="favoritePlayers">
    <div
      class="player-card"
      tabindex="0"
      v-for="player in userFavoritePlayers"
      :key="player.id"
      @click="showDetails(player)"
    >
      <img src="../../public/player-selected.png" alt="" class="player-card-profile-img" />
      <div class="player-card-player-name">{{ player.first_name + ' ' + player.last_name }}</div>
      <div class="player-card-player-number">#{{ player.jersey_number }}</div>
      <button class="removeFavoriteButton" @click="removeFavoritePlayer(player)">-</button>
    </div>
  </div>

  <div class="favorite-teams-container" v-if="favoriteTeams">
    <div class="team-card" tabindex="0">
      <div class="team-image-container">
        <img src="../../public/spursLogo.svg" alt="" class="team-logo-img" />
        <button class="removeFavoriteButton">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.removeFavoriteButton {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: rgba(144, 144, 149, 0.513);
  border: none;
  margin: 0.5rem;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
  font-family: var(--font-primary);
}

.removeFavoriteButton:hover {
  background: rgb(114, 5, 5);
  color: white;
}

.team-logo-img {
  min-width: 150px;
}

.team-card {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

.team-card:hover {
  background: rgba(136, 135, 135, 0.538);
}

.team-card:focus {
  background: rgb(187, 150, 150);
}

.player-card-player-name {
  font-size: 16px;
}

.player-card-player-number {
  font-size: 30px;
}

.favoriteOptionButton {
  background: rgba(196, 196, 198, 0.556);
  border: none;
  border-radius: 20px;
  width: 70px;
  font-family: var(--font-primary);
  font-size: 12px;
  height: 30px;
  box-shadow: 1px 1px 15px 2px black;
  cursor: pointer;
}

.favoriteOptionButton:hover {
  background: rgba(135, 135, 135, 0.639);
}

.favoriteOptions {
  display: flex;
  height: 30px;
  gap: 1rem;
  margin: 1rem;
}

/* player card inside the card containers  */
.team-cards-container .player-card {
  width: 150px;
  height: 200px;
  border: 1px solid black;
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: var(--font-primary);
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  position: relative;
}

/* hover over player card */
.team-cards-container .player-card:hover {
  background-color: rgba(136, 135, 135, 0.538);
}

/* whenever a player is selected inside the card container */
.team-cards-container .player-card:focus {
  background-color: rgb(187, 150, 150);
}

/* profile image inside the player card */
.player-card .player-card-profile-img {
  width: 80px;
  margin-top: 1rem;
}

/* team cards container */
.team-cards-container {
  width: 100%;
  border: 1px solid black;
  max-height: 440px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 210px);
  padding: 1rem;
  overflow-y: auto;
}

.favorite-teams-container {
  width: 100%;
  border: 1px solid black;
  max-height: 440px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 160px);
  padding: 1rem;
  overflow-y: auto;
}
</style>
