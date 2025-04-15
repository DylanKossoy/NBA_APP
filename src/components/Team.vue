<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()
const props = defineProps({
  team: Object,
  teamImg: String,
})






const data = computed(() => props.team)
const teamImage = computed(() => props.teamImg)
const showInfo = ref(false)

const isValid = ref(false)

const teamInfo = ref(null)



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

    teamInfo.value = data.standings

    console.log(teamInfo.value)
  } else {
    console.log(response.status)
  }
}

getTeamInfo()
</script>

<template>
  <div class="main-container">
    <div class="image-player-container">
      <img :src="teamImage" alt="" class="player-selected-img" />
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
          <span class="label-info-piece">Name:</span>
          <span class="info-piece-stat">{{ data.name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Full Name:</span>
          <span class="info-piece-stat">{{ data.full_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Abbreviation:</span>
          <span class="info-piece-stat">{{ data.abbreviation }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Division:</span>
          <span class="info-piece-stat">{{ data.division }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">City:</span>
          <span class="info-piece-stat">{{ data.city }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Conference:</span>
          <span class="info-piece-stat">{{ data.conference }}</span>
        </div>
      </div>
    </div>
    <div class="player-selected-info-container" v-if="showInfo">
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Season: </span>
          <span class="info-piece-stat">{{ teamInfo.season }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Conference Record: </span>
          <span class="info-piece-stat">{{ teamInfo.conference_record }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Conference Rank: </span>
          <span class="info-piece-stat">{{ teamInfo.conference_rank }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Division Record:</span>
          <span class="info-piece-stat">{{ teamInfo.division_record }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Division Rank:</span>
          <span class="info-piece-stat">{{ teamInfo.division_rank }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Wins:</span>
          <span class="info-piece-stat">{{ teamInfo.wins }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Losses:</span>
          <span class="info-piece-stat">{{ teamInfo.losses }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Home Record:</span>
          <span class="info-piece-stat">{{ teamInfo.home_record }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Road Record:</span>
          <span class="info-piece-stat">{{ teamInfo.road_record }}</span>
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
  max-width: 150px;
}

.player-selected-info-container {
  width: 700px;
  height: 249px;
  display: flex;

}

.info-box {
  min-width: 350px;

  font-family: var(--font-primary);
  border: none;
  border-left: .5px solid black;
  padding-inline: 0.5rem;
  padding-top: 0.5rem;
  margin: 0;
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
