<script setup></script>

<template>
  <div class="container">
    <div class="feed-header">Newest Games</div>

    <div class="newest-games">
      <div class="home-team">
        <img src="../../public/cavsLogo.svg" alt="" class="teamLogos" />
      </div>
      <div class="vsLetters">
        <span class="letterV">V</span>
        <span class="letterS">S</span>
      </div>
      <div class="away-team">
        <img src="../../public/blazersLogo.svg" alt="" class="teamLogos" />
      </div>

      <div class="time-container"><span>4:30pm - 40</span></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid blue;
  height: 450px;
  display: flex;

  flex-direction: column;
  align-items: center;
}

.time-container {
  position: absolute;
  right: 43%;
}

.vsLetters {
  width: 100px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 30px;
}

.letterV {
  transform: translateY(-5px);
}
.letterS {
  transform: translateY(5px);
}

.feed-header {
  font-family: var(--font-primary);
  font-size: 25px;
  margin-block: 1rem;
  font-weight: 700;
}

.home-team,
.away-team {
  width: 170px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.teamLogos {
  max-width: 80px;
}

.newest-games {
  min-width: 450px;
  height: 150px;
  border: 1px solid black;
  display: flex;
  position: relative;
}
</style>
