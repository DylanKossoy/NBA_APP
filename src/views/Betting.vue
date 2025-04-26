<script setup>
import Header from '../components/Header.vue'
import { useUserStore } from '../stores/user.js'

import { onMounted, ref } from 'vue'


onMounted(() => {
  getBets()
})

const allBets = ref([])




const getBets = async () => {


  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/bets`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.userToken}`
    }
  }


  const response = await fetch(url, options)


  if(response.status === 200) {
    const dd = await response.json()

    allBets.value = dd


    console.log(dd);
  }
}

const store = useUserStore()




</script>

<template>
  <Header>
    <template #links>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/betting">Hub</RouterLink>

      <RouterLink to="/Profile">Profile</RouterLink>
    </template>

    <template #user>

      <div class="user-username">{{ store.userData.username }}</div>
    </template>
  </Header>



  <div class="container">

    <div class="bets-header">Your Bets: </div>
    <div class="bets-container">
      <div class="bet-cell" v-for="bet in allBets" :key="bet.id">
        <div class="top-cell"
        ><div class="game-id"><div class="label">Game Id:</div>{{ bet.gameId }}</div>
        <div class="player-id"><div class="label">Player Id:</div>{{ bet.playerId }}</div>
        <div class="status"><div class="label">Status:</div>{{ bet.status }}</div>
      </div>
      <div class="bottom-cell">

        <div class="full-bottom">
          <div class="header-box">Predictions</div>
          <div class="left-bottom">

            <div ><div class="labelX">Assists:</div>{{ bet.predictions.assists }}</div>
            <div ><div class="labelX">Points:</div>{{ bet.predictions.points }}</div>
            <div ><div class="labelX">Rebounds:</div>{{ bet.predictions.rebounds }}</div>
            <div ><div class="labelX">Steals:</div>{{ bet.predictions.steals }}</div>
            <div ><div class="labelX">Threes:</div>{{ bet.predictions.threes }}</div>

          </div>

        </div>
        <div class="full-bottom">
          <div class="header-box">Actual</div>
          <div class="right-bottom">

            <div ><div class="labelX">Assists:</div>{{ bet.actualStats.assists }}</div>
            <div ><div class="labelX">Points:</div>{{ bet.actualStats.points }}</div>
            <div ><div class="labelX">Rebounds:</div>{{ bet.actualStats.rebounds }}</div>
            <div ><div class="labelX">Steals:</div>{{ bet.actualStats.steals }}</div>
            <div ><div class="labelX">Threes:</div>{{ bet.actualStats.threes }}</div>

          </div>

        </div>

      </div>

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
      <div class="bet-cell">

      </div>
    </div>
  </div>




</template>


<style scoped>

.container {
  border: 1px solid black;
  height: 800px;
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.bets-header {
  font-family: var(--font-primary);
  font-size: 40px;
  font-weight: 700;
}


.bets-container {
  border: 1px solid black;
  height: 600px;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  overflow-y: auto;
}

.bet-cell {
  border: 1px solid black;
  width: 490px;
  height: 200px;
  margin: 1rem;
  display: flex;
  flex-direction: column;

}

.top-cell {
  display: flex;
  padding-left: 0.5rem;
  gap: 4rem;
  font-family: var(--font-primary);
  border-bottom: 2px solid black;
}

.label {
  color: darkred;
  font-size: 15px;
}


.bottom-cell {
  display: flex;
  padding: .5rem;
  height: 300px;
  gap: 1rem;
  font-family: var(--font-primary);
}


.left-bottom, .right-bottom {
  width: 220px;

  padding: .5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

}


.left-bottom {
  border-right: 1px solid black;
}

.full-bottom {
  display: flex;
  flex-direction: column;
}

.labelX {
  font-size: 12px;
  color: darkred;
}




</style>
