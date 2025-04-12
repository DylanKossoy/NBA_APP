<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()

const favoritePlayers = ref(true)
const favoriteTeams = ref(false)




// all team logo images
const teamLogos = {
  Hawks: '',
  Celtics: '',
  Nets: '',
  Hornets: '',
  Bulls: '',
  Cavaliers: '',
  Mavericks: '',
  Nuggets: '',
  Pistons: '',
  Warriors: '',
  Rockets: '',
  Pacers: '',
  Clippers: '',
  Lakers: '',
  Grizzlies: '',
  Heat: '',
  Bucks: '',
  Timberwolves: '',
  Pelicans: '',
  Knicks: '',
  Thunder: '',
  Magic: '',
  '76ers': '',
  Suns: '',
  TrailBlazers: '',
  Kings: '',
  Spurs: '',
  Raptors: '',
  Jazz: '',
  Wizards: ''
};













const togglePlayers = () => {
  favoriteTeams.value = false
  favoritePlayers.value = true
}

const toggleTeams = () => {
  favoritePlayers.value = false
  favoriteTeams.value = true
}

// const showDeck = async () => {}
</script>

<template>

  <div class="favoriteOptions">
    <button @click="togglePlayers" class="favoriteOptionButton">Players</button>
    <button @click="toggleTeams" class="favoriteOptionButton">Teams</button>
  </div>
  <div class="team-cards-container" v-if="favoritePlayers">
    <div class="player-card" tabindex="0">
      <img src="../../public/basketball-player.png" alt="" class="player-card-profile-img" />
      <div class="player-card-player-name">Player Name</div>
      <div class="player-card-player-number">#00</div>
    </div>
    <div class="player-card" tabindex="0">
      <img src="../../public/basketball-player.png" alt="" class="player-card-profile-img" />
      <div class="player-card-player-name">Player Name</div>
      <div class="player-card-player-number">#00</div>
    </div>
  </div>

  <div class="favorite-teams-container" v-if="favoriteTeams">

    <div class="team-card">
      <span class="info-team-card">Team Name</span>
    </div>

  </div>
</template>

<style scoped>


.team-card {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  border-radius: 10px;

}


.player-card-player-name {
  font-size: 12px;
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
  width: 100px;
  height: 140px;
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
  width: 50px;
}

/* team cards container */
.team-cards-container {
  width: 100%;
  border: 1px solid black;
  max-height: 440px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 160px);
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
