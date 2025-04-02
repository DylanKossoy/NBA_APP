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
      <RouterLink to="/signin">Sign In</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.links-navbar {
  display: flex;
  margin-inline: 3rem;
  gap: 2rem;
}
</style>
