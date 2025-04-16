<script setup>
import {computed} from 'vue'
const props = defineProps({
  game: Object,
})

const data = computed(() => props.game)

// all team logo images
const teamLogos = {
  Hawks: '../../public/hawksLogo.avif',
  Celtics: '../../public/celticsLogo.png',
  Nets: '../../public/netsLogo.png',
  Hornets: '../../public/hornetsLogo.svg',
  Bulls: '../../public/bullsLogo.svg',
  Cavaliers: '../../public/cavsLogo.svg',
  Mavericks: '../../public/mavsLogo.svg',
  Nuggets: '../../public/nuggetsLogo.svg',
  Pistons: '../../public/pistonsLogo.svg',
  Warriors: '../../public/warriorsLogo.svg',
  Rockets: '../../public/rocketsLogo.svg',
  Pacers: '../../public/pacersLogo.svg',
  Clippers: '../../public/clippersLogo.svg',
  Lakers: '../../public/lakersLogo.svg',
  Grizzlies: '../../public/grizzliesLogo.svg',
  Heat: '../../public/heatLogo.svg',
  Bucks: '../../public/bucksLogo.svg',
  Timberwolves: '../../public/timberwolvesLogo.svg',
  Pelicans: '../../public/pelicansLogo.svg',
  Knicks: '../../public/knicksLogo.svg',
  Thunder: '../../public/thunderLogo.svg',
  Magic: '../../public/magicLogo.svg',
  '76ers': '../../public/sixersLogo.svg',
  Suns: '../../public/sunsLogo.png',
  'Trail Blazers': '../../public/trailblazersLogo.svg',
  Kings: '../../public/kingsLogo.svg',
  Spurs: '../../public/spursLogo.svg',
  Raptors: '../../public/raptorsLogo.svg',
  Jazz: '../../public/jazzLogo.svg',
  Wizards: '../../public/wizardsLogo.svg',
}




</script>

<template>
  <div class="main-container">
    <div class="left-info-box-container">
      <span class="season-year">{{ data.season }}</span>
      <img :src="teamLogos[data.home_team.name]" alt="" class="teamLogoInfo homeTeam" />
      <span class="vsLetters">VS</span>
      <img :src="teamLogos[data.visitor_team.name]" alt="" class="teamLogoInfo visitorTeam" />
    </div>
    <div class="right-info-boxes-container">
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Date:</span>
          <span class="info-piece-stat">{{ data?.date }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Status:</span>
          <span class="info-piece-stat">{{ data?.status }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Period:</span>
          <span class="info-piece-stat">{{ data?.period }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Home Team Score:</span>
          <span class="info-piece-stat">{{ data?.home_team_score }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Visitor Team Score:</span>
          <span class="info-piece-stat">{{ data?.visitor_team_score }}</span>
        </div>
      </div>

      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Home Team Name:</span>
          <span class="info-piece-stat">{{ data?.home_team?.name }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Home Team Conference:</span>
          <span class="info-piece-stat">{{ data?.home_team?.conference }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Home Team Division:</span>
          <span class="info-piece-stat">{{ data?.home_team?.division }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Home Team City:</span>
          <span class="info-piece-stat">{{ data?.home_team?.city }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Home Team Full Name:</span>
          <span class="info-piece-stat">{{ data?.home_team?.full_name }}</span>
        </div>
      </div>
      <div class="info-box">
        <div class="info-piece">
          <span class="label-info-piece">Visitor Team Name:</span>
          <span class="info-piece-stat">{{ data?.visitor_team?.name }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Visitor Team Conference:</span>
          <span class="info-piece-stat">{{ data?.visitor_team?.conference }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Visitor Team Division:</span>
          <span class="info-piece-stat">{{ data?.visitor_team?.division }}</span>
        </div>

        <div class="info-piece">
          <span class="label-info-piece">Visitor Team City:</span>
          <span class="info-piece-stat">{{ data?.visitor_team?.city }}</span>
        </div>
        <div class="info-piece">
          <span class="label-info-piece">Visitor Team Full Name:</span>
          <span class="info-piece-stat">{{ data?.visitor_team?.full_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



.season-year {
  position: absolute;

  right: 10px;
  font-size: 30px;
}
.vsLetters {
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  top: 45%;
  right: 45%;
}

.teamLogoInfo {
  max-width: 100px;
}

.main-container {
  height: 245px;
  width: 999px;
  border: 1px solid black;
  display: flex;
  font-family: var(--font-primary);
}

.left-info-box-container {
  width: 300px;
  height: 245px;
  border-right: 1px solid black;

  position: relative;
}

.right-info-boxes-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.info-box {
  width: 232px;
  height: 245px;
  border-left: 1px solid black;
  padding-inline: 0.5rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
}

.visitorTeam {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.homeTeam {
  position: absolute;
  top: 10px;
  left: 10px;
}

.label-info-piece {
  font-size: 12px;
  color: rgb(143, 7, 7);
  font-weight: 700;
}

.info-piece {
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid black;
}
</style>
