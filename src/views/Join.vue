<script setup>
import { ref } from 'vue'
import emailValidator from 'email-validator'
import { useRouter } from 'vue-router'

import { useUserStore } from '../../src/stores/user.js'

const store = useUserStore()

const router = useRouter()

const errorText = ref('-')

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPass = ref('')

const usernameValid = ref(false)
const emailValid = ref(false)
const passwordValid = ref(false)
const confirmPassValid = ref(false)

// triggershake to whatever element i need and a timer to set it back
const triggerShake = (field) => {
  field.value = true
  setTimeout(() => {
    field.value = false
  }, 300)
}

// this will trigger a error text and then reset it

const triggerError = (error) => {
  errorText.value = error
  setTimeout(() => {
    errorText.value = '-'
  }, 1000)
}

// when everything is check and good then this will create the user
const createUser = async (username, email, password) => {
  const data = {
    username,
    email,
    password,
  }

  // register a user
  const url = 'https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/user'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  const response = await fetch(url, options)

  if (response.status === 201) {
    const data = await response.json()

    console.log(data)

    store.setUserData(data)

    router.push({
      path: '/home',
    })
  } else {
    console.log('somethings wrong: ', response.status)
  }
}

const check = async (event) => {
  event.preventDefault()

  let error = false

  // checking

  if (!username.value.trim()) {
    triggerShake(usernameValid)
    error = true
  }

  if (!email.value.trim()) {
    triggerShake(emailValid)
    error = true
  }

  if (!password.value.trim()) {
    triggerShake(passwordValid)
    error = true
  }

  if (!confirmPass.value.trim()) {
    triggerShake(confirmPassValid)
    error = true
  }

  if (error) {
    triggerError('* Empty Fields *')
    return
  }

  // checking if the email is valid
  if (!emailValidator.validate(email.value)) {
    triggerShake(emailValid)
    triggerError('* Invalid Email *')
    return
  }

  // check password length

  if (password.value.length < 8) {
    triggerShake(passwordValid)
    triggerShake(confirmPassValid)
    triggerError('* password needs to be 8 or more characters')
    return
  }

  // checking if the passwords match
  if (password.value !== confirmPass.value) {
    triggerShake(passwordValid)
    triggerShake(confirmPassValid)
    triggerError('* Passwords do not match *')
    return
  }

  createUser(username.value, email.value, password.value)
}
</script>

<template>
  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
    </div>
    <div class="links-navbar">
      <RouterLink to="/">Welcome</RouterLink>
      <RouterLink to="/signin">Sign In</RouterLink>
    </div>
  </div>

  <div class="join-container">
    <div class="join-prompt">
      <div class="title-container">
        <h2>Welcome New User! Enter Information</h2>
      </div>

      <form class="join-inputs-container">
        <div class="group-input">
          <div class="label-input">Username</div>
          <input type="text" v-model="username" :class="{ shake: usernameValid }" />
        </div>
        <div class="group-input">
          <div class="label-input">Email</div>
          <input type="email" v-model="email" :class="{ shake: emailValid }" />
        </div>
        <div class="group-input">
          <div class="label-input">Password</div>
          <input type="password" v-model="password" :class="{ shake: passwordValid }" />
        </div>
        <div class="group-input">
          <div class="label-input">Confirm Password</div>
          <input
            type="password"
            id="confirmPass"
            v-model="confirmPass"
            :class="{ shake: confirmPassValid }"
          />
        </div>
      </form>
      <div class="error-container">
        <p class="error-text" v-if="errorText">{{ errorText }}</p>
      </div>

      <div class="button-container">
        <button type="submit" @click="check">Proceed</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links-navbar {
  display: flex;
  margin-inline: 3rem;
  gap: 2rem;
}

/* holds the join prompt with everything. just to make sure everything is layed out in the middle */

.join-container {
  margin-top: 3rem;

  height: 600px;
  display: flex;
  justify-content: center;
}

/* error container */
.error-container {
  width: 500px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

/* label inputs for the input fields */
.label-input {
  font-family: var(--font-primary);
  font-style: italic;
}

/* title container is just holding the message in the join prompt */
.title-container {
  margin-block: 1rem;
}

/* holding all the the inputs labels and titles */
.join-prompt {
  box-shadow: 5px 5px 20px 1px;
  border-radius: 5px;

  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* group input is the label and input together */
.group-input {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 1rem;
}

/* styling the input  */
.group-input input {
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: rgba(237, 235, 235, 0.607);
  padding-left: 0.5rem;
  font-family: var(--font-primary);
}

/* styling the input on focus */
.group-input input:focus {
  background-color: rgba(201, 225, 227, 0.406);
}

/* button container join prompt */
.button-container {
  margin-top: 1rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* button styling */
.button-container button {
  width: 150px;
  height: 40px;
  font-family: var(--font-primary);
  border-radius: 5px;
  border: none;
  transition: background-color 1s ease;
}

/* button hover */
.button-container button:hover {
  background-color: rgb(173, 170, 170);
  cursor: pointer;
}

/* error */
.error-text {
  margin: 0;
  color: rgb(188, 70, 70);
  font-family: var(--font-primary);
  font-size: 20px;
}

/* h2 title */
h2 {
  font-family: var(--font-primary);
  font-size: 23px;
}
</style>
