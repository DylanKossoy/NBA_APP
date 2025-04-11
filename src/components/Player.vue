<script setup>
const props = defineProps({
  player: Object,
})

console.log('player component: ' + Object.keys(props.player.team))

const data = props.player




</script>

<template>
  <div class="main-container">
    <div class="image-player-container">
      <img src="../../public/player-selected.png" alt="" class="player-selected-img" />
    </div>
    <div class="player-selected-info-container">
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Id:</span>
          <span class="info-piece-stat">{{ data.id }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">First Name:</span>
          <span class="info-piece-stat">{{ data.first_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Last Name:</span>
          <span class="info-piece-stat">{{ data.last_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Position:</span>
          <span class="info-piece-stat">{{ data.position }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Height:</span>
          <span class="info-piece-stat">{{ data.height }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Weight:</span>
          <span class="info-piece-stat">{{ data.weight }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Jersey:</span>
          <span class="info-piece-stat">{{ data.jersey_number }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">College:</span>
          <span class="info-piece-stat">{{ data.college }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Country:</span>
          <span class="info-piece-stat">{{ data.country }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Draft Year:</span>
          <span class="info-piece-stat">{{ data.draft_year }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Draft Round:</span>
          <span class="info-piece-stat">{{ data.draft_round }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Draft Number:</span>
          <span class="info-piece-stat">{{ data.draft_number }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Team:</span>
          <span class="info-piece-stat">{{ data.team.name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Conference:</span>
          <span class="info-piece-stat">{{ data.team.conference }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Division:</span>
          <span class="info-piece-stat">{{ data.team.division }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">City:</span>
          <span class="info-piece-stat">{{ data.team.city }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Full Team Name:</span>
          <span class="info-piece-stat">{{ data.team.full_name }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Team Abbreviation:</span>
          <span class="info-piece-stat">{{ data.team.abbreviation }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-player-container {
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-selected-img {
  max-width: 200px;
}

.player-selected-info-container {
  width: 700px;
  height: 240px;
  display: flex;
  margin-left: 2rem;
}

.info-box {
  width: 1200px;

  font-family: var(--font-primary);
  border: 0.5px solid black;
  padding-left: 0.5rem;
}

.main-container {
  display: flex;
}

.label-info-piece {
  font-size: 15px;
  color: rgb(143, 7, 7);
  font-weight: 700;
}

.info-piece {
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid black;
}
</style>
