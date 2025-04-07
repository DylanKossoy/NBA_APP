<style setup></style>


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
      <img src="../../public/user.png" alt="" class="profile-user-img" />
      <div class="user-username">Username</div>
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
</style>