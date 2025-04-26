<script setup>
import { ref } from 'vue'
import Search from '../components/Search.vue'
import Player from '../components/Player.vue'
import Deck from '../components/Deck.vue'
import Header from '../components/Header.vue'
import Team from '../components/Team.vue'
import Games from '../components/Games.vue'

import { useUserStore } from '../stores/user.js'

const store = useUserStore()

const selectedPlayer = ref(null)
const selectedTeam = ref(null)
const selectedGame = ref(null)

const teamImg = ref(null)

const handlePlayer = (player) => {
  selectedPlayer.value = player
}

const handleTeam = (team) => {
  selectedTeam.value = team
}

const handleImg = (img) => {
  teamImg.value = img
}

const handleGame = (game) => {
  selectedGame.value = game
}
</script>

<template>
  <Header>
    <template #links>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/betting">Bets</RouterLink>

      <RouterLink to="/Profile">Profile</RouterLink>
    </template>

    <template #user>
      <img src="../../public/user.png" alt="" class="profile-user-img" />
      <div class="user-username">{{ store.userData.username }}</div>
    </template>
  </Header>

  <div class="content-container">
    <div class="left-side-container">
      <div class="playerDeckContainer">
        <Deck
          @playerChoice="handlePlayer"
          @teamChoice="handleTeam"
          @teamImgChoice="handleImg"
          @gameChoice="handleGame"
        ></Deck>
      </div>

      <div class="season-selection-container">
        <Player v-if="selectedPlayer" :player="selectedPlayer"></Player>
        <Team v-if="selectedTeam" :team="selectedTeam" :teamImg="teamImg"></Team>
        <Games v-if="selectedGame" :game="selectedGame"></Games>
      </div>
    </div>
    <div class="right-side-container">
      <div class="player-container">
        <Search
          v-model:selected-player="selectedPlayer"
          v-model:selected-team="selectedTeam"
          v-model:team-img="teamImg"
          v-model:selected-game="selectedGame"
        ></Search>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playerDeckContainer {
  min-height: 500px;
}

.player-card-player-name {
  font-size: 12px;
}

/* info box container when player is selected */
.player-selected-container .info-player-container {
  display: flex;
}

/* info boxes for players stats */

.info-player-container .info-box-one,
.info-player-container .info-box-two {
  width: 300px;

  height: 230px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 15px;
}

.player-selected-stat {
  font-size: 20px;
}

.player-selected-stat-number {
  font-weight: 100;
  font-size: 15px;
  margin-left: 1rem;
}

.player-selected-country {
  font-size: 20px;
}

/* player selected profile picture image */
.player-selected-user-img {
  width: 180px;
}

.profile-img-container {
  display: flex;
  padding: 2rem;
  font-family: var(--font-primary);
  border-bottom: 0.5px solid rgba(200, 196, 196, 0.289);
}

/* holding player name and number selected */
.profile-img-container .player-name-number {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

/* pplayer selected and player number selected */
.profile-img-container .player-selected-name {
  font-size: 30px;
}
.profile-img-container .player-selected-number {
  font-size: 80px;
}

.hash {
  font-size: 50px;
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
.left-side-container .team-cards-container {
  width: 100%;
  height: 500px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 160px);
  padding: 1rem;
  overflow-y: auto;
}

/* season selection container  */
.left-side-container .season-selection-container {
  width: 100%;
  height: 250px;
  border: 1px solid black;
  border-top: 5px solid rgb(76, 75, 75);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

/* season option in the season selection container */

.season-selection-container .season-option {
  width: 480px;
  height: 110px;
  border: 1px solid black;
  border-radius: 10px;
}

/* player selection container */
.right-side-container .player-container {
  width: 500px;
  height: 750px;
  overflow-y: auto;
}

/* player container - player selected container */

.player-container .player-selected-container {
  width: 450px;
  height: 500px;
  background: rgba(111, 120, 127, 0.35);
}

/* player container - information box */
.player-container .info-box-container {
  width: 450px;
  height: 250px;
  border: 1px solid black;
}

/* content container holding the left and right side */
.content-container {
  display: flex;
  height: 750px;
}

/* left side container */
.left-side-container {
  width: 1000px;
  height: 750px;
  border: 0.1px solid black;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
}

/* side nav for selecting the right team */
.right-side-container .sidenav-team-selection {
  width: 200px;
  height: 750px;
  border: 0.1px solid black;
  display: flex;
  flex-direction: column;
}

/* team-option inside the sidenav-team-selection */
.sidenav-team-selection .team-option {
  width: 200px;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  cursor: pointer;
}

/* team option hover and focus */
.team-option:hover {
  background-color: rgba(121, 119, 119, 0.212);
}

.team-option:focus {
  background-color: rgba(101, 209, 219, 0.24);
}

/* right side container */

.right-side-container {
  width: 650px;
  height: 750px;
  border: 0.1px solid black;
  margin-inline: 1rem;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.217);
}

/* nav links container in the middle of the nav bar */
.nav-links {
  display: flex;
  gap: 3rem;
}

/* nav username and profile img container */
.nav-username-container {
  width: 250px;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}



/* profile user img */

.profile-user-img {
  max-width: 50px;
}
</style>
