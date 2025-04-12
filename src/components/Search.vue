<script setup>
import { ref } from 'vue'

const playerSelected = defineModel('selected-player')


const searchInput = ref(null)
const searchTerm = ref('')
const resultsContainerValid = ref(false)
const advancedOption = ref(false)

// refs for advanced search

const advancedSeason = ref('')
const advancedConference = ref('')

const searchPlayerResults = ref([])


let urlEndpoint = ''

// function that controls the endpoint of the search input
function getEndpoint(endpoint) {
  switch (endpoint) {
    case 1:
      urlEndpoint = 'players'

      searchInput.value.style.backgroundColor = '#e665654f'
      searchInput.value.placeholder = 'Enter Player Name'
      searchInput.value.style['pointer-events'] = 'auto'

      break
    case 2:
      urlEndpoint = 'teams'
      searchInput.value.style.backgroundColor = '#6590e64f'
      searchInput.value.placeholder = 'Enter Team Name'
      searchInput.value.style['pointer-events'] = 'auto'
      break
    case 3:
      urlEndpoint = 'games'
      searchInput.value.style.backgroundColor = '#7fa6db4f'
      searchInput.value.placeholder = 'Enter Game Name'
      searchInput.value.style['pointer-events'] = 'auto'
      break
    default:
      return
  }

  console.log(urlEndpoint)
}

// function to show userstats below there team

const showUserStats = async (data) => {
  playerSelected.value = null
  setTimeout(() => {
    playerSelected.value = data
  }, 100)




}







// 3 functions of searching either teams/ players/ or games/

async function searchPlayers() {
  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/${urlEndpoint}`

  if (advancedConference.value || advancedSeason.value || searchTerm.value) {
    url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/${urlEndpoint}?name-search=${searchTerm.value}`
  }

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)

  if (response.status === 200) {
    const dataObject = await response.json()



    searchPlayerResults.value.push(dataObject.data[0])



    searchTerm.value = ''
    resultsContainerValid.value = true
  } else {
    resultsContainerValid.value = false
    console.log(response.status)
  }
}

function searchTeams() {}

function searchGames() {}

function toggleAdvanced() {
  advancedOption.value = !advancedOption.value
}

// function that fetches what the user input searched

const searchBasketball = async () => {
  resultsContainerValid.value = false
  searchPlayerResults.value = []


  if (!searchInput.value || !urlEndpoint) {
    return
  }

  switch (urlEndpoint) {
    case 'players':
      searchPlayers()
      break
    case 'teams':
      searchTeams()
      break
    case 'games':
      searchGames()
      break
    default:
      return
  }
}
</script>
<template>
  <div class="blue-team-members-container">
    <div class="top-of-search-container">
      <div class="blue-team-header">
        <button class="player-button-filter" @click="getEndpoint(1)">Players</button>
        <button class="player-button-filter" @click="getEndpoint(2)">Teams</button>
        <button class="player-button-filter" @click="getEndpoint(3)">Games</button>
      </div>

      <div class="input-container">
        <img src="../../public/search-interface-symbol.png" alt="" class="search-img" />
        <input
          ref="searchInput"
          type="text"
          v-model="searchTerm"
          class="searchInputContainer"
          placeholder="Choose a Option Above"
        />
        <button class="searchButton" @click="searchBasketball">Search →</button>
      </div>
      <div class="advanced-button-container">
        <div class="advanced-inputs-container" v-if="advancedOption">
          <div class="advanced-option">
            <div class="label">Choose Season:</div>
            <input
              type="number"
              min="2000"
              max="2100"
              placeholder="Choose Season"
              class="season-year"
              v-model="advancedSeason"
            />
          </div>
          <div class="advanced-option">
            <div class="label">Choose Conference:</div>
            <select name="conference" class="conferenceSelect">
              <option value="west">West</option>
              <option value="east">East</option>
            </select>
          </div>
        </div>
        <button class="advancedSearchButton" @click="toggleAdvanced">Advanced Search</button>
      </div>
    </div>
    <div class="blue-team-members" v-if="resultsContainerValid">
      <div
        class="user-cell"
        v-for="result in searchPlayerResults"
        :key="result.id"
        tabindex="0"
        @click="showUserStats(result)"
      >
        <div class="user-info-box">
          <span class="label-info-player">First Name: </span>
          <span class="stat-number">{{ result.first_name }}</span>
        </div>
        <div class="user-info-box">
          <span class="label-info-player">Last Name: </span>
          <span class="stat-number">{{ result.last_name }}</span>
        </div>
        <div class="user-info-box">
          <span class="label-info-player">Jersey: </span>
          <span class="stat-number">{{ result.jersey_number }}</span>
        </div>
        <div class="user-info-box">
          <span class="label-info-player">Height: </span>
          <span class="stat-number">{{ result.height }}</span>
        </div>
        <div class="user-info-box">
          <span class="label-info-player">Conference: </span>
          <span class="stat-number">{{ result.team.conference }}</span>
        </div>
        <div class="user-info-box">
          <span class="label-info-player">Team: </span>
          <span class="stat-number">{{ result.team.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label-info-player {
  font-size: 12px;
  color: rgb(111, 19, 19);
}
.result-stats {
  color: red;
}

.stat-number {
  font-size: 15px;
}

.top-of-search-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 0.5px solid rgb(78, 69, 69);
}

.label {
  font-size: 10px;
}

.conferenceSelect {
  width: 100px;
  background: rgb(119, 119, 119);
  border: 1px solid black;
}
.season-year {
  width: 100px;
  background: rgb(119, 119, 119);
  border: 1px solid black;
}

.advanced-option {
  width: 150px;
}

.advanced-inputs-container {
  display: flex;
  gap: 1rem;
}

.user-info-box {
  width: 100px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-primary);
  padding: 1rem;
}

.advanced-button-container {
  display: flex;
  justify-content: right;
  width: 500px;
  min-height: 50px;
  margin: 10px;
}

.advancedSearchButton {
  width: 120px;
  height: 30px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  background: rgb(146, 144, 144);
}

.advancedSearchButton:hover {
  background: rgb(96, 96, 96);
}

/* searching player/team/games button*/
.searchButton {
  position: absolute;
  right: 0;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: rgba(183, 183, 183, 0.187);
  font-size: 17px;
  font-family: var(--font-primary);
  color: black;
}
.searchButton:hover {
  background: grey;
}

/* nav logout container */

.logout-style {
  margin-inline: 2.5rem;
  color: rgb(138, 39, 39);
}

/* latest feed container. the two cards that have recent news about games and stats and things like that */
.latest-feed-container .feed-card {
  width: 500px;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.031);
  border: 1px solid black;
}

/* top half container  right side latest updates */

.top-half-container .latest-feed-container {
  background-color: rgba(65, 62, 62, 5%);
  width: 1300px;
  display: flex;
  justify-content: space-evenly;
}

/* blue team members box that has the input and all the other blue team users inside it
/* top half container blue team members container */

.top-half-container .blue-team-members-container {
  width: 500px;
  background-color: rgb(121, 121, 121);
  flex: auto;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 2rem 2rem;
  align-items: center;
  font-family: var(--font-primary);
}

/* input container inside the blue team members box */
.blue-team-members-container .input-container {
  width: 500px;
  display: flex;
  justify-content: center;
  position: relative;
}

/* input in the input container in the blue team member box */
.input-container input {
  width: 500px;
  height: 40px;
  padding-left: 3rem;
  font-size: 20px;
  pointer-events: none;
}

/* search image */
.input-container .search-img {
  position: absolute;
  width: 25px;
  left: 0;
  margin-top: 10px;
  margin-left: 10px;
}

.searchInputContainer {
  border: none;
  border-radius: 8px;
  min-height: 50px;

}

.searchInputContainer::placeholder {
  color: rgb(94, 93, 93);
}

/* blue team header over the input */
.blue-team-header {
  min-height: 100px;
  margin-top: 1rem;

  display: flex;


}

/* buttons in blue team header */

.blue-team-header button {
  background: transparent;
  border: none;
  border-left: .25px solid black;
  border-right: .25px solid black;
  cursor: pointer;
  margin-block: 1rem;
  color: rgb(41, 40, 40);
  font-size: 25px;
  width: 150px;
}

.player-button-filter:hover {
  background: rgba(255, 255, 255, 0.114);

}



/* blue members cell container holding each blue team member */
.blue-team-members {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 2rem;
  width: 500px;
}

.blue-team-members .user-cell {
  height: 100px;
  border: 1px solid black;
  width: 500px;
  flex: 0 0 auto;
  display: flex;
  cursor: pointer;
  backdrop-filter: blur(10px);
  background: rgba(210, 206, 206, 0.624);
}

.user-cell:hover {
  background: rgba(23, 125, 193, 0.206);
}

.user-cell:focus {
  background: rgba(39, 71, 134, 0.389);
}
</style>
