<script setup></script>

<template>
      <div class="navbar">
      <div class="logo-navbar">
        <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
      </div>

      <div class="nav-links">
        <RouterLink to="/home">Home</RouterLink>
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


  <div class="content-container">
    <div class="left-side-container">
      <div class="team-cards-container">
        <div class="player-card"></div>
      </div>

      <div class="season-selection-container">
        <div class="season-option"></div>
        <div class="season-option"></div>
        <div class="season-option"></div>
        <div class="season-option"></div>
      </div>
    </div>
    <div class="right-side-container">
      <div class="sidenav-team-selection">
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
        <div class="team-option" tabindex="0">Team 1</div>
      </div>

      <div class="player-container">
        <div class="player-selected-container"></div>
        <div class="info-box-container"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>








/* team cards container */
.left-side-container .team-cards-container {
  width: 100%;
  height: 500px;
  border: 1px solid black;
}

/* season selection container  */
.left-side-container .season-selection-container {
  width: 100%;
  height: 250px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: .5rem;
}


/* season option in the season selection container */

.season-selection-container .season-option {
  width: 580px;
  height: 110px;
  border: 1px solid black;
  border-radius: 10px;
}



/* player selection container */
.right-side-container .player-container {
  width: 450px;
  height: 750px;
  border: 1px solid black;
}


/* player container - player selected container */

.player-container .player-selected-container {
  width: 450px;
  height: 500px;
  border: 1px solid black
}

/* player container - information box */
.player-container .info-box-container {
  width: 450px;
  height: 250px;
  border: 1px solid black;
}



/* content container holding the left and right side */
.content-container {
  display: flex;
  height: 750px;
}

/* left side container */
.left-side-container {
  width: 1200px;
  height: 750px;
  border: .1px solid black;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
}


/* side nav for selecting the right team */
.right-side-container .sidenav-team-selection {
  width: 200px;
  height: 750px;
  border: .1px solid black;
  display: flex;
  flex-direction: column;

}

/* team-option inside the sidenav-team-selection */
.sidenav-team-selection .team-option {
  width: 200px;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  cursor: pointer;

}


/* team option hover and focus */
.team-option:hover {
  background-color: rgba(121, 119, 119, 0.212);
}

.team-option:focus {
  background-color: rgba(101, 209, 219, 0.24);
}


/* right side container */

.right-side-container {
  width: 650px;
  height: 750px;
  border: .1px solid black;
  margin-inline: 1rem;
  display: flex;
}







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
}</style>
