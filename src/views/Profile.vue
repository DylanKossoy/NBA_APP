<script setup>
import { ref, useTemplateRef } from 'vue'
import { useUserStore } from '../../src/stores/user.js'
import { useRouter } from 'vue-router'
import Modal from '../components/Modal.vue'

const store = useUserStore()
const modal = useTemplateRef('name-modal')


const newUsername = ref('');
const newEmail = ref('');
const newPassword = ref('');

const userImg = ref(localStorage.getItem('userAvatar'))

const router = useRouter()

function cancel(e) {
  modal.value.close(e)
}

function save(e) {
  editUserProfile()
  modal.value.close(e)
}

// function for editing profile

const editUserProfile = async () => {
  // url for patching profile data



  const data = {
        email: newEmail.value || store.userData.email,
        username: newUsername.value || store.userData.username,
        password: newPassword.value || store.userData.password
    }


  const url = 'https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/user/me'



  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.userToken}`
    },
    body: JSON.stringify(data),
  }



  const response = await fetch(url, options);


  if(response.status === 200) {

    store.userData.username = data.username
    store.userData.email = data.email
    store.userPassword = data.password




    router.push({
      path: '/home'
    })
  }
}

// function to delete account

const deleteAccount = async () => {
  // url to delete user

  const url = 'https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/user/me'

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.userToken}`,
    },
  }

  const response = await fetch(url, options)

  if (response.status === 200) {
    router.push({
      path: '/',
    })
  }
}

const clearFavoritePlayers = () => {
  store.userData.favoritePlayers.length = 0
}
const clearFavoriteTeams = () => {
  store.userData.favoriteTeams.length = 0
}
</script>

<template>
  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
    </div>

    <div class="nav-links">
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/Hub">Hub</RouterLink>
      <RouterLink to="/Gambling">Gambling</RouterLink>


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
          <button class="edit-button" @click="modal.open">Edit</button>
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
    <Modal ref="name-modal">
      <template #header>
        <h1 class="primary-heading">Edit Profile</h1>
      </template>
      <template #main>
        <div class="usernameEmailModal">
          <input
            type="text"
            v-model="newUsername"
            id="username"
            name="username"
            placeholder="New Username"
          />
          <input type="email" v-model="newEmail" id="Email" name="Email" placeholder="New Email" />
          <input
            type="password"
            v-model="newPassword"
            id="password"
            name="password"
            placeholder="New Password"
          />
          <div class="clearButtonsContainer">

            <button class="clear-buttons" @click="clearFavoriteTeams">Clear Favorite Teams</button>
            <button class="clear-buttons" @click="clearFavoritePlayers">
              Clear Favorite Players
            </button>
          </div>
        </div>
      </template>
      <template #footer>
        <button @click.stop="cancel" class="footerButtons">Cancel</button>
        <button @click.stop="save" class="footerButtons">Save</button>
      </template>
    </Modal>
  </div>
</template>

<style scoped>


.primary-heading {
  color: white;
  margin-bottom: 2rem;
}

.footerButtons {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: rgb(188, 188, 188);
  cursor: pointer;
}

.footerButtons:hover {
  background: rgb(78, 76, 76);
}

.clearButtonsContainer {
  display: flex;
  justify-content: space-evenly;
}

.usernameEmailModal {
  display: flex;
  flex-direction: column;
}

.usernameEmailModal input {
  width: 400px;
  height: 50px;
  margin-block: 1rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-family: var(--font-primary);

}

.usernameEmailModal button {
  width: 170px;
  height: 50px;
  border-radius: 20px;
  margin-block: 1rem;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.usernameEmailModal button:hover {
  background: rgb(111, 111, 111);
}




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
