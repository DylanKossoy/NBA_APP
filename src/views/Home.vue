<script setup></script>

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
        <img src="../../public/user.png" alt="" class="profile-user-img">
        <div class="user-username">Username</div>
      </div>

  </div>



  <div class="top-half-container">
    <div class="blue-team-members-container">

    </div>
    <div class="latest-feed-container">

    </div>
  </div>

  <div class="bottom-half-container">
    <div class="favorite-players-header">Favorite Players</div>
    <div class="card-container">
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>
      <div class="favorite-player-card"></div>


    </div>

  </div>
</template>

<style scoped>





/* nav links container in the middle of the nav bar */
.nav-links {

  display: flex;
  gap: 3rem;
}


/* nav username and profile img container */
.nav-username-container {
  width: 250px;
  gap: 1.5rem;
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


/* top half container blue team members container */

.top-half-container .blue-team-members-container {
  width: 500px;
  background-color: rgb(121, 121, 121);
}


/* top half container  right side latest updates */

.top-half-container .latest-feed-container {
  background-color: rgba(65, 62, 62, 5%);
  width: 1300px;
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


}





</style>
