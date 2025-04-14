<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()
const props = defineProps({
  team: Object,
})


const data = computed(() => props.team)
const showInfo = ref(false)

const isValid = ref(false)


const toggleInfoContainer = () => {
  showInfo.value = !showInfo.value
}

// function to add the player to favorite teams array in pinia
const addFavoriteTeam = () => {
  let favoriteTeams = store.userData.favoriteTeams
  let pass = true

  for (let i = 0; i < favoriteTeams.length; i++) {
    if (props.team.id === favoriteTeams[i].id) {
      console.log('cant add try again')
      pass = false
    }
  }

  if (pass) {
    store.userData.favoriteTeams.push(props.team)
    triggerIsValid()
  }
}

const triggerIsValid = () => {
  isValid.value = true
  setTimeout(() => {
    isValid.value = false
  }, 1000)
}

const getTeamInfo = async () => {
  const url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/teams/${data.value.id}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)

  if (response.status === 200) {
    const data = await response.json()


    console.log(data);
  } else {
    console.log(response.status)
  }
}

getTeamInfo()


</script>

<template>
  <div class="main-container">
    <div class="image-player-container">
      <div class="playerNumberSelected">#{{ data.jersey_number }}</div>
      <img src="../../public/player-selected.png" alt="" class="player-selected-img" />
      <button class="more-info-button" @click="toggleInfoContainer">More Info</button>
      <button class="addFavoriteButton" @click="addFavoriteTeam">+</button>
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
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Games Played: </span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Minutes Per Game: </span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Points Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Rebounds Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Defensive Rebounds Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Offensive Rebounds Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Assists Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Steals Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Blocks Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Turnovers Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">P Fouls Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Three Point Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Three Point A Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Three Point Percentage:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throws Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throws A Per Game:</span>
          <span class="info-piece-stat"></span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Free Throw Percentage:</span>
          <span class="info-piece-stat"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playerNumberSelected {
  position: absolute;
  right: -15px;
  top: 20px;
  font-family: var(--font-primary);
  font-size: 40px;
}

.added-successful {
  position: absolute;
  color: rgb(1, 48, 1);

  top: 20%;
  left: 0;
}

.addFavoriteButton {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
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
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.more-info-button {
  position: absolute;
  top: 0;
  right: -15px;
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
  max-width: 200px;
}

.player-selected-info-container {
  width: 700px;
  height: 240px;
  display: flex;
  margin-left: 2rem;
}

.info-box {
  width: 1200px;

  font-family: var(--font-primary);
  border: 0.5px solid black;
  padding-left: 0.5rem;
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
