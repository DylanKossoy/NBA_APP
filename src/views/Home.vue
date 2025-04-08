<script setup>
import { useUserStore } from '../stores/user.js'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const store = useUserStore()

onMounted(() => {
  console.log(store.userData.username)
})


const image = localStorage.getItem('userAvatar');

document.getElementById('')





</script>

<template>
  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
    </div>

    <div class="nav-links">
      <RouterLink to="/Team">Team</RouterLink>
      <RouterLink to="/Gambling">Gambling</RouterLink>
      <RouterLink to="/Games">Games</RouterLink>
      <RouterLink to="/Stats">Stats</RouterLink>
      <RouterLink to="/Profile">Profile</RouterLink>
    </div>

    <div class="nav-username-container">
      <img src="imagesrc" alt="" class="profile-user-img" />
      <div class="user-username">{{ store.userData.username }}</div>

      <RouterLink to="/join" class="logout-style" @click="store.userData.logout">Logout</RouterLink>
    </div>
  </div>

  <div class="top-half-container">
    <div class="blue-team-members-container">
      <div class="blue-team-header">
        <button class="player-button-filter">Players</button>
        <button class="player-button-filter">Teams</button>
        <button class="player-button-filter">Games</button>
      </div>

      <div class="input-container">
        <img src="../../public/search-interface-symbol.png" alt="" class="search-img" />
        <input type="text" />
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
    <div class="latest-feed-container">
      <div class="feed-card">news</div>
      <div class="feed-card">news</div>
    </div>
  </div>

  <div class="bottom-half-container">
    <div class="favorite-players-header">Favorite Players</div>
    <div class="card-container">
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
      <div class="favorite-player-card">
        <img src="../../public/user.png" alt="" class="stats-user-img" />
        <div class="player-name-incard">player name</div>
        <div class="player-stats-incard">
          <span class="stats-incard">PTS: 0</span>
          <span class="stats-incard">RBS: 0</span>
          <span class="stats-incard">ASS: 0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* nav logout container */

.logout-style {
  margin-left: 2.5rem;
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
}

/* search image */
.input-container .search-img {
  position: absolute;
  width: 25px;
  left: 0;
  margin-top: 8px;
  margin-left: 10px;
}

/* blue team header over the input */
.blue-team-header {
  height: 100px;
  color: rgb(0, 0, 133);
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


}

.blue-team-header button:hover {
  border-bottom: 1px solid black;
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
}

/* nav username and profile img container */
.nav-username-container {
  width: 300px;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

@media (max-width: 1450px) {
  .top-half-container {
    height: 350px;
  }

  .bottom-half-container {
    height: 250px;
  }

  /* blue team member container */
  .top-half-container .blue-team-members-container {
    width: 400px;
  }

  /* input inside blue team member container */
  .input-container input {
    width: 400px;
  }

  /* search img */
  .input-container .search-img {
    left: 10%;
  }

  /* blue team member cells */
  .blue-team-members .user-cell {
    width: 400px;
  }

  /* feed container that is on the left side on the top half  feed card */
  .latest-feed-container .feed-card {
    width: 400px;
    height: 350px;
  }

  /* bottom cards container */
}
</style>
