<script setup>

import { useUserStore } from '../stores/user.js'
import { ref } from 'vue'

const store = useUserStore()

const favoritePlayers = ref([])
const favoriteTeams = ref([])


const players = ref(true)
const teams = ref(false)


// all team logo images
const playerShirts = {
  Hawks: '../../public/Players/ATL_icon.png',
  Celtics: '../../public/Players/BOS_icon.png',
  Nets: '../../public/Players/BKN_icon.png',
  Hornets: '../../public/Players/CHA_icon.png',
  Bulls: '../../public/Players/CHI_icon.png',
  Cavaliers: '../../public/Players/CLE_icon.png',
  Mavericks: '../../public/Players/DAL_icon.png',
  Nuggets: '../../public/Players/DEN_icon.png',
  Pistons: '../../public/Players/DET_icon.png',
  Warriors: '../../public/Players/GSW_icon.png',
  Rockets: '../../public/Players/HOU_icon.png',
  Pacers: '../../public/Players/IND_icon.png',
  Clippers: '../../public/Players/LAC_icon.png',
  Lakers: '../../public/Players/LAL_icon.png',
  Grizzlies: '../../public/Players/MEM_icon.png',
  Heat: '../../public/Players/MIA_icon.png',
  Bucks: '../../public/Players/MIL_icon.png',
  Timberwolves: '../../public/Players/MIN_icon.png',
  Pelicans: '../../public/Players/NOP_icon.png',
  Knicks: '../../public/Players/NYK_icon.png',
  Thunder: '../../public/Players/ORL_icon.png',
  Magic: '../../public/Players/PHI_icon.png',
  '76ers': '../../public/Players/PHX_icon.png',
  Suns: '../../public/Players/POR_icon.png',
  'Trail Blazers': '../../public/Players/POR_icon.png',
  Kings: '../../public/Players/SAC_icon.png',
  Spurs: '../../public/Players/SAS_icon.png',
  Raptors: '../../public/Players/TOR_icon.png',
  Jazz: '../../public/Players/UTA_icon.png',
  Wizards: '../../public/Players/WAS_icon.png',
}

// all team logo images
const teamLogos = {
  Hawks: '../../public/hawksLogo.avif',
  Celtics: '../../public/celticsLogo.png',
  Nets: '../../public/netsLogo.png',
  Hornets: '../../public/hornetsLogo.svg',
  Bulls: '../../public/bullsLogo.svg',
  Cavaliers: '../../public/cavsLogo.svg',
  Mavericks: '../../public/mavsLogo.svg',
  Nuggets: '../../public/nuggetsLogo.svg',
  Pistons: '../../public/pistonsLogo.svg',
  Warriors: '../../public/warriorsLogo.svg',
  Rockets: '../../public/rocketsLogo.svg',
  Pacers: '../../public/pacersLogo.svg',
  Clippers: '../../public/clippersLogo.svg',
  Lakers: '../../public/lakersLogo.svg',
  Grizzlies: '../../public/grizzliesLogo.svg',
  Heat: '../../public/heatLogo.svg',
  Bucks: '../../public/bucksLogo.svg',
  Timberwolves: '../../public/timberwolvesLogo.svg',
  Pelicans: '../../public/pelicansLogo.svg',
  Knicks: '../../public/knicksLogo.svg',
  Thunder: '../../public/thunderLogo.svg',
  Magic: '../../public/magicLogo.svg',
  '76ers': '../../public/sixersLogo.svg',
  Suns: '../../public/sunsLogo.png',
  'Trail Blazers': '../../public/trailblazersLogo.svg',
  Kings: '../../public/kingsLogo.svg',
  Spurs: '../../public/spursLogo.svg',
  Raptors: '../../public/raptorsLogo.svg',
  Jazz: '../../public/jazzLogo.svg',
  Wizards: '../../public/wizardsLogo.svg',
}

















const loadFavoritePlayers = () => {
  teams.value = false
  players.value = true
  favoritePlayers.value = [];
  setTimeout(() => {
    favoritePlayers.value = store.userData.favoritePlayers
    console.log(favoritePlayers.value[0])

  }, 300)




}


const loadFavoriteTeams = () => {
  players.value = false;
  teams.value = true;

  favoriteTeams.value = []

  setTimeout(() => {
    favoriteTeams.value = store.userData.favoriteTeams

  }, 300)



}






</script>
<template>
  <div class="favorite-players-header" >
    <button class="favoritePlayersButton" @click="loadFavoritePlayers">Favorite Players</button>
    <button class="favoriteTeamsButton" @click="loadFavoriteTeams">Favorite Teams</button>
  </div>
  <div class="card-container" v-if="players">
    <div class="favorite-player-card" v-for="player in favoritePlayers" :key="player.id">
      <img :src="playerShirts[player.team.name]" alt="" class="stats-user-img" />
      <div class="player-name-incard">{{ player.first_name }} {{ player.last_name }}</div>
      <div class="player-stats-incard">
        <div class="stat-container">
          <span class="labelPlayer">Conference</span>
          <span class="stats-incard">{{ player.team.conference }}</span>
        </div>
        <div class="stat-container">
          <span class="labelPlayer">Height</span>
          <span class="stats-incard">{{ player.height }}</span>
        </div>


      </div>
    </div>
  </div>
  <div class="card-team-container" v-if="teams">
    <div class="team-card" v-for="team in favoriteTeams" :key="team.id">
      <img :src="teamLogos[team.name]" alt="" class="team-logo-card-img">
    </div>
  </div>
</template>

<style scoped>


.card-team-container {

  overflow-y: hidden;
  overflow-x: auto;
  height: 250px;
  padding-inline: 1rem;
  gap: 1rem;


  display: flex;
}

.team-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  border-radius: 20px;
  height: 250px;
  border: 1px solid black;
}

.team-logo-card-img {
  max-width: 150px;
}


.stat-container {
  display: flex;
  flex-direction: column;
  font-family: var(--font-primary);
}


.labelPlayer {
  font-size: 12px;
  color: rgb(114, 5, 5);


}

.player-stats-incard {
  display: flex;
  gap: .5rem;
}


.player-name-incard {
  font-family: var(--font-primary);
  font-size: 20px;
  text-align: center;
}



.card-container {
  overflow-y: hidden;
  overflow-x: auto;
  height: 250px;
  padding-inline: 1rem;
  display: flex;
  gap: 1rem;
}

.favorite-players-header {
  font-family: var(--font-primary);
  font-size: 15px;

  display: flex;
  gap: 1rem;
  margin-left: .5rem;
  margin-top: .5rem;
  margin-bottom: 1rem;

}


.favoritePlayersButton, .favoriteTeamsButton {
  min-width: 200px;
  height: 30px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.618);
  color: rgb(231, 218, 218);
  font-size: 16px;

  outline: none;
  border: none;
  border-radius: 50px;

}

.favorite-players-header button:hover {
  background: rgb(113, 112, 112);

}

/* favorite player cards inside the card container */

.card-container .favorite-player-card {
  width: 200px;
  height: 250px;
  border: 1px solid black;
  border-radius: 5px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
}

/* span elements inside card that show stats (pTS, RBS, ASS) */

.favorite-player-card .stats-incard {
  font-size: 15px;
}

/* profile image in the favorite player cards */
.favorite-player-card .stats-user-img {
  width: 80px;
}
</style>
