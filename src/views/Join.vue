<script setup>
import { ref } from 'vue'



const errorText = ref('-');

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPass = ref('');


const usernameValid = ref(false);
const emailValid = ref(false);
const passwordValid = ref(false);
const confirmPassValid = ref(false);



// triggershake to whatever element i need and a timer to set it back
const triggerShake = (field) => {
  field.value = true;
  setTimeout(() => {
    field.value = false;
  }, 300)
}

const check = async (event) => {
  event.preventDefault()


  let error = false;


  // checking

  if(!username.value.trim()) {
    triggerShake(usernameValid)
    error = true;
  }

  if(!email.value.trim()) {
    triggerShake(emailValid);
    error = true;
  }

  if(!password.value.trim()) {
    triggerShake(passwordValid);
    error = true;
  }

  if(!confirmPass.value.trim()){
    triggerShake(confirmPassValid);
    error = true
  }

  if(error) {
    errorText.value = "* Empty Field *";

  }


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

      <div class="join-inputs-container">
        <div class="group-input">
          <label for="username">Username</label>
          <input type="text" v-model="username" :class="{ shake: usernameValid}"/>
          <p class="error-text" v-if="errorText">{{ errorText }}</p>
        </div>
        <div class="group-input">
          <label for="email">Email</label>
          <input type="email" v-model="email" :class="{ shake: emailValid}"/>
          <p class="error-text" v-if="errorText">{{ errorText }}</p>
        </div>
        <div class="group-input">
          <label for="password">Password</label>
          <input type="password" v-model="password" :class="{ shake: passwordValid}"/>
          <p class="error-text" v-if="errorText">{{ errorText }}</p>
        </div>
        <div class="group-input">
          <label for="confirmPass">Confirm Password</label>
          <input type="password" v-model="confirmPass" :class="{ shake: confirmPassValid }"/>
          <p class="error-text" v-if="errorText">{{ errorText }}</p>
        </div>
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



/* error */
.error-text {
  margin: 0;
  color: rgb(188, 70, 70);
  font-family: var(--font-primary);
  font-size: 15px;


}
</style>
