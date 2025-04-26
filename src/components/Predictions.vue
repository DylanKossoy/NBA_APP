<script setup>

import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'


const store = useUserStore()


const gameId = ref(null);
const playerId = ref(null);
const pointsP = ref(null);
const assistsP = ref(null)
const reboundsP = ref(null)
const threesP = ref(null)
const stealsP = ref(null)



const createBet = async () => {

  if(!gameId.value || !playerId.value || !pointsP.value || !assistsP.value || !reboundsP.value || !threesP.value || !stealsP.value) {
    console.log("Need to fill out all fields");
    return;
  }


  const data = {
    gameId: gameId.value,
    playerId: playerId.value,
    predictions: {
      points: pointsP.value,
      assists: assistsP.value,
      rebounds: reboundsP.value,
      threes: threesP.value,
      steals: stealsP.value
    }
  }



  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/bets`


  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.userToken}`
    },
    body: JSON.stringify(data)
  }


  const response = await fetch(url, options)


  if(response.status === 201) {
    console.log("created bet")
    gameId.value = null
    playerId.value = null
    pointsP.value = null
    assistsP.value = null
    threesP.value = null
    reboundsP.value = null
    stealsP.value = null

  } else {
    console.log(response.status)
  }

}






</script>

<template>

  <div class="container">


    <div class="prediction-container">

      <div class="top-container">
        <div class="input-container">
          <div class="label">Game Id **</div>
          <input type="text" class="prediction-top-inputs" placeholder="GameId..." v-model="gameId">
        </div>
        <div class="input-container">
          <div class="label">Player Id**</div>
          <input type="text" class="prediction-top-inputs" placeholder="PlayerId..." v-model="playerId">
        </div>

      </div>
      <div class="input-container">
        <div class="label">Points **</div>
        <input type="text" class="prediction-inputs" placeholder="Place Prediction" v-model="pointsP">
      </div>
      <div class="input-container">
        <div class="label">Assists **</div>
        <input type="text" class="prediction-inputs" placeholder="Place Prediction" v-model="assistsP">
      </div>
      <div class="input-container">
        <div class="label">Rebounds **</div>
        <input type="text" class="prediction-inputs" placeholder="Place Prediction" v-model="reboundsP">
      </div>
      <div class="input-container">
        <div class="label">Threes **</div>
        <input type="text" class="prediction-inputs" placeholder="Place Prediction" v-model="threesP">
      </div>
      <div class="input-container">
        <div class="label">Steals **</div>
        <input type="text" class="prediction-inputs" placeholder="Place Prediction" v-model="stealsP">
      </div>
    </div>

    <div class="button-container">
      <button class="placeBetButton" @click="createBet">Place Bet</button>
    </div>

  </div>
</template>


<style scoped>

.top-container {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

}

.container {
  border: 1px solid black;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.prediction-inputs {
  width: 400px;
  height: 30px;
  background: rgb(200, 200, 200);
  color: rgb(85, 7, 7);
  font-size: 15px;
  padding-left: 0.5rem;
}

.prediction-top-inputs {
  width: 192px;
  height: 30px;
  background: rgb(200, 200, 200);
  color: rgb(85, 7, 7);
  font-size: 15px;
  padding-left: 0.5rem;
}



.player-name {
  font-family: var(--font-primary);
  font-size: 20px;

}


.prediction-container {
  width: 400px;
}

.input-container {
  margin-block: 0.5rem;
}

.label {
  font-family: var(--font-primary);
  font-size: 15px;
  color: rgb(86, 0, 0);
}

.placeBetButton {
  width: 100px;
  height: 40px;
  background:rgb(85, 7, 7);
  border: none;
  border-radius: 30px;
  color: white;
  font-family: var(--font-primary);
  cursor: pointer;


}

.placeBetButton:hover {
  background: rgba(139, 0, 0, 0.798);
}

</style>
