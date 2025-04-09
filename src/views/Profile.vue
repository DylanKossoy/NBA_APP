<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../src/stores/user.js'

const store = useUserStore()

const userImg = ref(localStorage.getItem('userAvatar'))






// function to delete account


const deleteAccount = async () => {

// url to delete user

const url = 'https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/user/me'

const options = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}


const response = await fetch(url, options);

console.log(response.status);




}
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
      <div class="user-username">{{ store.userData.username }}</div>
    </div>
  </div>
  <div class="main-container">
    <div class="profile-info-box-container">
      <div class="profile-header-container">
        <h1>User Information</h1>
        <div class="button-container">
          <button class="edit-button">Edit</button>
          <button class="delete-button" @click="deleteAccount">Delete</button>
        </div>
      </div>
      <div class="user-img-container">
        <img :src="userImg" alt="" class="user-img" />
      </div>
      <div class="user-info-box">
        <div class="user-info">
          <div class="label-info">Username:</div>
          <span class="user-info-username"> {{ store.userData.username }}</span>
        </div>
        <div class="user-info">
          <div class="label-info">Email:</div>
          <span class="user-info-email">{{ store.userData.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



.label-info {
  transform: translateY(-25px) translateX(20px);
  font-weight: 700;
  width: 100px;
}



h1 {
  margin: 0;
  font-size: 40px;
}

/* spans that display the actual username and email */
.user-info-username,
.user-info-email {
  font-size: 30px;
  transform: translateY(-25px) translateX(40px);
}




.user-info {
  display: flex;
  flex-direction: column;
  background: rgba(0, 221, 255, 0.193);
  height: 50px;
  border-radius: 30px;
  position: relative;
}

.user-username {
  font-size: 20px;

}

/* userinfo box inside the profile box container */
.user-info-box {
  display: flex;
  height: 200px;
  width: 500px;

  flex-direction: column;


  font-size: 20px;
  justify-content: space-evenly;
}

/* user iamge */
.user-img {
  width: 250px;
}
/* edit button */
.edit-button,
.delete-button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background: rgba(203, 206, 207, 0.393);
}

.edit-button:hover,
.delete-button:hover {
  background: rgb(119, 116, 116);
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
