<script setup>
import { ref, onMounted, computed} from 'vue'

const homeTeam = ref(true);
const visitorTeam = ref(false);



const props = defineProps({
  game: Object
})

const selectedPlayerBet = defineModel('selectedBetPlayer')

const game = computed(() => props.game)

onMounted(() => {
  if (game.value?.home_team && game.value?.visitor_team) {
    getHomeTeam()
    getVisitorTeam()
  } else {
    console.warn("Game data not ready on mount")
  }
})

console.log("bet page")
console.log(props.game)


const toggleHomeTeam = () => {
  homeTeam.value = true;
  visitorTeam.value = false;

}

const toggleVisitorTeam = () => {
  homeTeam.value = false;
  visitorTeam.value = true;
}











const getHomeTeam = async () => {


  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/games/${game.value.id}`


  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }



  const response = await fetch(url, options)


  if(response.status === 200) {
    const data = await response.json()


    console.log(data)
  } else {
    console.log(response.status);
  }

}


const getVisitorTeam = async () => {

  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/players?name-search=${props.game.visitor_team.name}`


  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }



  const response = await fetch(url, options)


  if(response.status === 200) {
    const data = await response.json()


    console.log(data)
  } else {
    console.log(response.status);
  }


}



</script>

<template>
  <div class="container">
    <div class="header-roster">
      <button class="homeTeamButton" @click="toggleHomeTeam">Home Team</button>
      <span class="heading">Team Roster</span>
      <button class="visitorTeamButton" @click="toggleVisitorTeam">Visitor Team</button>
    </div>
    <div class="home-container" v-if="homeTeam">
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton" @click="selectPlayer()">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#6</span>
          <button class="betButton">Bet</button>

        </div>
      </div>

    </div>
    <div class="visitor-container" v-if="visitorTeam">
      <div class="player-card">
        <span class="player-name">first last</span>
        <div class="right-side">
          <span class="player-number">#8</span>
          <button class="betButton">Bet</button>

        </div>
      </div>

    </div>
  </div>



</template>


<style scoped>

.right-side {
  display: flex;
  margin-right: .5rem;
  align-items: center;

}


.betButton {
  width: 50px;
  height: 30px;
  font-family: var(--font-primary);
  border-radius: 40px;
  border: none;
  background: rgb(97, 1, 1);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.betButton:hover {
  background: rgba(157, 2, 2, 0.999);
}

.container {

  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.header-roster {
  display: flex;
  gap: 2rem;
  font-family: var(--font-primary);

}


.heading {
  font-size: 25px;
  margin-block: 1rem;
  font-weight: 700;
}


.homeTeamButton, .visitorTeamButton {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  margin-block: 1rem;
  border: 1px solid black;
  outline: none;
  background: rgba(255, 255, 255, 0.216);
  font-size: 20px;
  color: rgb(27, 24, 24);
  cursor: pointer;
}


.homeTeamButton:hover, .visitorTeamButton:hover {
  background: rgb(128, 128, 129);
}


.homeTeamButton:focus, .visitorTeamButton:focus {
  background: rgb(92, 90, 90);
  color: rgba(255, 255, 255, 0.563);
}



.home-container {
  width: 550px;
  height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
  gap: .5rem;
}

.visitor-container {
  width: 550px;
  height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
  gap: .5rem;

}


.home-container .player-card {
  display: flex;
  width: 500px;
  height: 40px;
  border: 2px solid black;
  background: rgba(0, 114, 170, 0.24);
  justify-content: space-between;
}

.visitor-container .player-card {
  display: flex;
  width: 500px;
  height: 40px;
  border: 2px solid black;
  background: rgba(170, 0, 0, 0.24);
  justify-content: space-between;

}

.player-name, .player-number{
  font-size: 20px;
  font-family: var(--font-primary);
  font-weight: 700;
  margin-inline: 0.5rem;
  margin-top: 0.20rem;
}











</style>
