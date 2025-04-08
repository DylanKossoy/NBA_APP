<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../src/stores/user.js'

const store = useUserStore()


const router = useRouter()



const email = ref('');
const password = ref('');

const emailValid = ref(false);
const passwordValid = ref(false);

const errorText = ref('-');



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



const signIn = async (email, password) => {
  const data = {
    email,
    password
  }

  // url for login

  const url = 'https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/user/login'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }



  const response = await fetch(url, options)

  if (response.status === 200) {
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

const check = (event) => {
  event.preventDefault()

  let error = false

  // checking

  if (!email.value.trim()) {
    triggerShake(emailValid)
    error = true
  }

  if (!password.value.trim()) {
    triggerShake(passwordValid)
    error = true
  }

  if (error) {
    triggerError('* Empty Fields *')
    return
  }


  signIn(email.value, password.value);




}

</script>

<template>
  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
    </div>
    <div class="links-navbar">
      <RouterLink to="/">Welcome</RouterLink>
      <RouterLink to="/join">Join</RouterLink>
    </div>
  </div>

  <div class="join-container">
    <div class="join-prompt">
      <div class="title-container">
        <h2>Welcome Back! Log In</h2>
      </div>

      <div class="join-inputs-container">

        <div class="group-input">
          <label for="email">Email</label>
          <input type="email"
          v-model="email"
          :class="{ shake: emailValid }"
          />
        </div>
        <div class="group-input">
          <label for="password">Password</label>
          <input type="password"
          v-model="password"
          :class="{ shake: passwordValid }"
          />
        </div>

        <div class="error-container">
          <div class="errorText"> {{ errorText }}</div>

        </div>
      </div>



      <div class="button-container">
        <button type="submit" @click="check">Proceed</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-family: var(--font-primary);
}


.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-family: var(--font-primary);
}
.errorText {
  color: rgb(188, 70, 70);
}








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
  font-family: var(--font-primary);
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
  margin-top: 2rem;
}

/* label needs to be a bit more over input */

.group-input label {
  margin-bottom: 0.5rem;
  font-family: var(--font-primary);
}

/* styling the input  */
.group-input input {
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: rgba(237, 235, 235, 0.607);
  padding-left: 0.5rem;
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
</style>
