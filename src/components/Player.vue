<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()
const props = defineProps({
  player: Object,

})


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

console.log('player component: ' + Object.keys(props.player.team))

const data = computed(() => props.player)
const showInfo = ref(false)

const isValid = ref(false)

const playerStatsData = ref(null)

const toggleInfoContainer = () => {
  showInfo.value = !showInfo.value
}

// function to add the player to favorite teams array in pinia
const addFavoritePlayer = () => {
  let favoritePlayers = store.userData.favoritePlayers
  let pass = true

  for (let i = 0; i < favoritePlayers.length; i++) {
    if (props.player.first_name === favoritePlayers[i].first_name) {
      console.log('cant add try again')
      pass = false
    }
  }

  if (pass) {
    store.userData.favoritePlayers.push(props.player)
    triggerIsValid()
  }
}

const triggerIsValid = () => {
  isValid.value = true
  setTimeout(() => {
    isValid.value = false
  }, 1000)
}

const getPlayerInfo = async () => {
  const url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/players/${data.value.id}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)

  if (response.status === 200) {
    const data = await response.json()

    playerStatsData.value = data.stats.data[0]
    console.log(playerStatsData.value)
  } else {
    console.log(response.status)
  }
}

getPlayerInfo()
</script>

<template>
  <div class="main-container">
    <div class="image-player-container">
      <div class="playerNumberSelected">#{{ data.jersey_number }}</div>
      <img :src="playerShirts[data.team.name]" alt="" class="player-selected-img" />
      <button class="more-info-button" @click="toggleInfoContainer">More Info</button>
      <button class="addFavoriteButton" @click="addFavoritePlayer">+</button>
      <div class="added-successful" v-if="isValid">Added ✓</div>
    </div>
    <div class="player-selected-info-container" v-if="!showInfo">
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Id:</span>
          <span class="info-piece-stat">{{ data.id }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">First Name:</span>
          <span class="info-piece-stat">{{ data.first_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Last Name:</span>
          <span class="info-piece-stat">{{ data.last_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Position:</span>
          <span class="info-piece-stat">{{ data.position }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Height:</span>
          <span class="info-piece-stat">{{ data.height }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Weight:</span>
          <span class="info-piece-stat">{{ data.weight }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Jersey:</span>
          <span class="info-piece-stat">{{ data.jersey_number }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">College:</span>
          <span class="info-piece-stat">{{ data.college }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Country:</span>
          <span class="info-piece-stat">{{ data.country }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Draft Year:</span>
          <span class="info-piece-stat">{{ data.draft_year }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Draft Round:</span>
          <span class="info-piece-stat">{{ data.draft_round }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Draft Number:</span>
          <span class="info-piece-stat">{{ data.draft_number }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Team:</span>
          <span class="info-piece-stat">{{ data.team.name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Conference:</span>
          <span class="info-piece-stat">{{ data.team.conference }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Division:</span>
          <span class="info-piece-stat">{{ data.team.division }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">City:</span>
          <span class="info-piece-stat">{{ data.team.city }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Full Team Name:</span>
          <span class="info-piece-stat">{{ data.team.full_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Team Abbreviation:</span>
          <span class="info-piece-stat">{{ data.team.abbreviation }}</span>
        </div>
      </div>
    </div>
    <div class="player-selected-info-container" v-if="showInfo">
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Season: </span>
          <span class="info-piece-stat">{{ playerStatsData?.season }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Games Played: </span>
          <span class="info-piece-stat">{{ playerStatsData?.games_played }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Minutes Per Game: </span>
          <span class="info-piece-stat">{{ playerStatsData?.min }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Points Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.pts }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Rebounds Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.reb }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Defensive Rebounds Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.dreb }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Offensive Rebounds Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.oreb }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Assists Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.ast }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Steals Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.stl }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Blocks Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.blk }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Turnovers Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.turnover }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">P Fouls Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.pf }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Three Point Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.fg3m }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Three Point A Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.fg3a }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Three Point Percentage:</span>
          <span class="info-piece-stat">{{ playerStatsData?.fg3_pct }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throws Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.ftm }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throws A Per Game:</span>
          <span class="info-piece-stat">{{ playerStatsData?.fta }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throw Percentage:</span>
          <span class="info-piece-stat">{{ playerStatsData?.ft_pct }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playerNumberSelected {
  position: absolute;
  right: 10px;
  top: 30px;
  font-family: var(--font-primary);
  font-size: 40px;
}

.added-successful {
  position: absolute;
  color: rgb(1, 48, 1);

  top: 23%;
  left: 10px;
}

.addFavoriteButton {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  border: none;
  font-family: var(--font-primary);
  cursor: pointer;
  background: rgba(144, 144, 149, 0.513);
  font-size: 30px;
}

.addFavoriteButton:hover {
  background: rgb(7, 77, 29);
  color: white;
}

.image-player-container {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
}

.more-info-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 10px;
  border: none;
  width: 100px;
  font-family: var(--font-primary);
  background: rgba(144, 144, 149, 0.513);
  cursor: pointer;
}

.more-info-button:hover {
  background: rgb(126, 124, 124);
}

.player-selected-img {
  max-width: 130px;
}

.player-selected-info-container {
  width: 700px;
  height: 249px;
  display: flex;

}

.info-box {
  min-width: 170px;


  font-family: var(--font-primary);
  border-left: 0.5px solid black;
  padding-inline: 0.5rem;
  padding-top: 0.5rem;
}

.main-container {
  display: flex;
}

.label-info-piece {
  font-size: 12px;
  color: rgb(143, 7, 7);
  font-weight: 700;
}

.info-piece {
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid black;
}
</style>
