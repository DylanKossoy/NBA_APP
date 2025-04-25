<script setup>

import { onMounted, ref } from 'vue'

const timeNow = new Date().toISOString().split('T')[0]

const gamesArray = ref([])


const gameSelected = defineModel('selected-game');



onMounted(() => {
  fetchGames();


})


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



const fetchGames = async () => {


  let url = `https://csci-430-server-dubbabadgmf8hpfk.eastus2-01.azurewebsites.net/games?start_date=${timeNow}&end_date=${timeNow}`



  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }


  const response = await fetch(url, options)


  if(response.status === 200) {
    const data = await response.json()




    console.log(data);
    console.log(data.data);


    gamesArray.value.push(...data.data)


    console.log(gamesArray.value)



  } else {
    console.log(response.status)
  }
}


const getGame = (game) => {
  gameSelected.value = game

}










</script>

<template>
  <div class="container" v-if="gamesArray">
    <div class="feed-header">Upcoming/Newest Games</div>

    <div class="newest-games" v-for="game in gamesArray" :key="game.id" tabindex="0" @click="getGame(game)">
      <div class="home-team">
        <img :src="teamLogos[game.home_team.name]" alt="" class="teamLogos" />
      </div>
      <div class="vsLetters">
        <span class="letterV">V</span>
        <span class="letterS">S</span>
      </div>
      <div class="away-team">
        <img :src="teamLogos[game.visitor_team.name]" alt="" class="teamLogos" />
      </div>
      <div class="teamId">{{ game.id }}</div>

      <div class="team-container"><span>{{ game.home_team.name }} VS {{ game.visitor_team.name }}</span></div>
    </div>
  </div>
</template>

<style scoped>



.teamId {
  position: absolute;
  font-family: var(--font-primary);
  left: 10px;
  color: darkred;
  font-weight: 700;
}




.container {

  max-height: 450px;
  display: flex;
  overflow-y: auto;

  flex-direction: column;
  align-items: center;
}

.team-container {
  position: absolute;

  width: 500px;
  display: flex;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: 700;
}

.vsLetters {
  width: 120px;
  height: 180px;


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
  width: 200px;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.teamLogos {
  max-width: 100px;
}

.newest-games {
  min-width: 500px;
  min-height: 170px;
  border: 2px solid black;
  display: flex;
  margin-block: 1rem;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
}

.newest-games:hover {
  background: rgb(83, 78, 78);
}

.newest-games:focus {
  background: rgb(102, 101, 101);
}
</style>
