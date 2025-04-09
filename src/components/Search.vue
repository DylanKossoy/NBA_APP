<script setup>
import { ref } from 'vue'
const searchInput = ref(null)

// function that controls the endpoint of the search input
function getEndpoint(endpoint) {
  let urlEndpoint = ''

  switch (endpoint) {
    case 1:
      urlEndpoint = 'players'

      searchInput.value.style.backgroundColor = '#e665654f'
      searchInput.value.placeholder = 'Enter Player Name'
      searchInput.value.style['pointer-events']= "auto"

      break
      case 2:
        urlEndpoint = 'teams'
        searchInput.value.style.backgroundColor = '#6590e64f'
        searchInput.value.placeholder = 'Enter Team Name'
        searchInput.value.style['pointer-events']= "auto"
        break
        case 3:
          urlEndpoint = 'games'
          searchInput.value.style.backgroundColor = '#7fa6db4f'
          searchInput.value.placeholder = 'Enter Game Name'
          searchInput.value.style['pointer-events']= "auto"
      break
    default:
      return
  }

  console.log(urlEndpoint)
}
</script>
<template>
  <div class="blue-team-members-container">
    <div class="blue-team-header">
      <button class="player-button-filter" @click="getEndpoint(1)">Players</button>
      <button class="player-button-filter" @click="getEndpoint(2)">Teams</button>
      <button class="player-button-filter" @click="getEndpoint(3)">Games</button>
    </div>

    <div class="input-container">
      <img src="../../public/search-interface-symbol.png" alt="" class="search-img" />
      <input
        type="text"
        ref="searchInput"
        class="searchInputContainer"
        placeholder="Choose a Option Above"
      />
      <button class="searchButton">Search →</button>
    </div>
    <div class="blue-team-members">
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
      <div class="user-cell"></div>
    </div>
  </div>
</template>

<style scoped>
/* searching player/team/games button*/
.searchButton {
  position: absolute;
  right: 0;
  cursor: pointer;
  width: 100px;
  height: 40px;
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
  margin-top: 8px;
  margin-left: 10px;
}

.searchInputContainer {
  border: none;
  border-radius: 8px;
}

.searchInputContainer::placeholder {
  color: rgb(94, 93, 93);
}

/* blue team header over the input */
.blue-team-header {
  height: 150px;

  display: flex;
  gap: 2rem;
}

/* buttons in blue team header */

.blue-team-header button {
  background: transparent;
  border: none;
  transition: border-bottom-color 1s ease-in-out;
  border-bottom-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-block: 1rem;
  color: white;
  font-size: 25px;
}

.blue-team-header button:hover {
  border-bottom: 2px solid rgb(188, 184, 184);
  color: rgb(202, 193, 193);
}

/* blue members cell container holding each blue team member */
.blue-team-members {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 2rem;
}

.blue-team-members .user-cell {
  height: 60px;
  border: 1px solid black;
  width: 500px;
  flex: 0 0 auto;
}

/* nav links container in the middle of the nav bar */
.nav-links {
  display: flex;
  gap: 3rem;
  width: 700px;
  justify-content: right;
}

/* nav username and profile img container */
.nav-username-container {
  width: 400px;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
}

/* nav-username-container username - so the real username of the user gosh */
.user-username {
  font-size: 20px;
  font-family: var(--font-primary);
}

/* profile user img */

.profile-user-img {
  max-width: 50px;
}

/* top half of the home page that includes all the members of the blue team with a search bar */
/* top half showing the latest game results */

.top-half-container {
  height: 450px;
  display: flex;
  margin: 1rem;
  margin-top: 2rem;
  justify-content: space-between;
}

/* bottom half container */
.bottom-half-container {
  height: 250px;
  border: 1px solid black;
  margin: 1rem;
  padding-bottom: 1rem;
}

/* bottom half container favorite players */
.bottom-half-container .favorite-players-header {
  font-size: 20px;
  font-family: var(--font-primary);
  margin-left: 1rem;
  margin-bottom: 1.1rem;
}

/* bottom half container that holds the favorite player cards */
.bottom-half-container .card-container {
  overflow-y: hidden;
  overflow-x: auto;
  height: 200px;
  padding-inline: 1rem;
  display: flex;
  gap: 1rem;
}

/* favorite player cards inside the card container */

.card-container .favorite-player-card {
  width: 125px;
  height: 175px;
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
  font-size: 10px;
}

/* profile image in the favorite player cards */
.favorite-player-card .stats-user-img {
  width: 60px;
}
</style>
