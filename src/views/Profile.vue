<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../src/stores/user.js'

const store = useUserStore()


const userImg = ref(localStorage.getItem('userAvatar'))





</script>


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
      <img :src="userImg" alt="" class="profile-user-img" />
      <div class="user-username"> {{ store.userData.username }}</div>
    </div>
  </div>
  <div class="main-container">
    <div class="profile-info-box-container">
      <div class="profile-header-container">
        <h1>User Information</h1>
        <button class="edit-button">edit</button>
      </div>
      <div class="user-img-container">
        <img :src="userImg" alt="" class="user-img">
      </div>
      <div class="user-info-box">
        <div >Username: <span class="user-username"> {{ store.userData.username }}</span></div>
        <div >Email: <span class="user-email">{{ store.userData.email }}</span></div>

      </div>
    </div>
  </div>
</template>

<style scoped>

h1 {
  margin: 0;
  font-size: 40px;
}

/* spans that display the actual username and email */
.user-username, .user-email {
  font-size: 20px;
}


/* userinfo box inside the profile box container */
.user-info-box {
  display: flex;
  height: 300px;
  flex-direction: column;

  font-size: 20px;
  justify-content: top;
}

/* user iamge */
.user-img {
  width: 250px;
}
/* edit button */
.edit-button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}


/* profile header container */
.profile-header-container {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

/* profile box holding all the boxs and information */
.profile-info-box-container {
  width: 600px;
  height: 700px;
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}

/* main container holding up the profile info container box */
.main-container {
  height: 800px;

  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-primary);
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

  font-family: var(--font-primary);
}

/* profile user img */

.profile-user-img {
  max-width: 50px;
}
</style>
