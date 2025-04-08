<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />
    </div>
    <div class="links-navbar">
      <RouterLink to="/join">Join</RouterLink>
      <RouterLink to="/signin" class="signin-button">Log In</RouterLink>
    </div>
  </div>
  <div class="welcome-message-container">
    <h1 class="welcome-message">Welcome! Please Sign In</h1>
  </div>
</template>

<style scoped>


.signin-button {
  color: rgb(138, 39, 39);
}
.links-navbar {
  display: flex;
  margin-inline: 3rem;
  gap: 2rem;
}

.welcome-message-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-family: var(--font-primary);
}
</style>
