<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  player: Object,
})

console.log(props.player.team.id + ' deck')



watch(() => props.player.team.id, (newId) => {
  console.log("change" + newId)
  showDeck()
})

const showDeck = async () => {
  const url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/players?name-search=${props.player.team.name}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)

  if (response.status === 200) {
    const data = await response.json()

    console.log('this is data collected from user chosen team: ' + data)
  } else {
    console.log(response.data)
  }
}
</script>

<template>
  <div class="team-cards-container">
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
</template>

<style scoped>
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
  min-height: 500px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 160px);
  padding: 1rem;
  overflow-y: auto;
}
</style>
