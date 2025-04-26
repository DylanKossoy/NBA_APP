<script setup></script>

<template>

  <div class="navbar">
    <div class="logo-navbar">
      <img src="../../public/basketballLogo.png" alt="" class="basketball-logo" />

    </div>

    <div class="nav-links">
      <slot name="links"></slot>
    </div>

    <div class="nav-username-container">
      <slot name="user"></slot>
    </div>
  </div>



</template>


<style>


.navbar {
  margin: 1rem;
  background: var(--color-navbar-background);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.nav-username-container a {
  text-decoration: none;
  font-family: var(--font-primary);
  font-size: 30px;
  color: black;

}

/* sign in button */

.signin-button {
  color: rgb(138, 39, 39);
}



.nav-links a {
  text-decoration: none;
  font-family: var(--font-primary);
  font-size: 30px;
  color: black;
}


.logo-navbar .basketball-logo {
  max-height: 50px;
  margin: 1.5rem;
}

/* nav links container in the middle of the nav bar */
.nav-links {
  display: flex;
  gap: 5rem;
}

/* nav username and profile img container */
.nav-username-container {
  width: 350px;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* nav-username-container username - so the real username of the user gosh */
.user-username {
  font-size: 30px;
  font-family: var(--font-primary);
}

/* profile user img */

.profile-user-img {
  max-width: 50px;
}



</style>
