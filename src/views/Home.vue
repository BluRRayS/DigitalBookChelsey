
<template>
  <div class="home page">
    <div class="home-container">
      <img src="../assets/bee.png" class="bee-image" alt="Bee" />
      <h1>Het lammetje dat dacht dat hij een koe was</h1>
      <p>Door Chelsey Koopman</p>
      <router-link to="/story/1">
        <button v-ripple class="read-button">
          Lezen
          <v-icon name="play" class="icon"></v-icon>
        </button>
      </router-link>
      <img class="lamb-image" src="../assets/Goat.png" alt="Lamb" />
    </div>
    <img src="../assets/backgroundWave.svg" class="backgroundWave" />
  </div>
</template>

<style scoped>
a {
  width: fit-content;
  align-self: center;
}

h1 {
  margin-bottom: 0.25em;
}
p {
  margin-top: 0.25em;
  margin-bottom: 2em;
}
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.read-button {
  position: relative;
  color: white;
  background-color: #6fcfc7;
  border-radius: 2em;
  border: none;
  font-family: ArchitectsDaughter, sans-serif;
  font-size: 18px;
  padding: 0.5em 2em 0.5em 2em;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  outline: none;
}

.bee-image {
  width: 10vw;
  max-width: 100px;
  height: auto;
  margin-top: 17vh;
  min-width: 50px;
}

@media only screen and (min-width: 1024px) {
  .bee-image {
    margin-left: 20vw;
    margin-top: 10vh;
  }
}

.lamb-image {
  width: 60vw;
  max-width: 400px;
  height: auto;
  margin-top: auto;
  align-self: flex-end;
}
.icon {
  padding-left: 0.75em;
  height: auto;
  width: 10px;
}
</style>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
