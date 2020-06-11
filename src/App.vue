<template>
  <transition name="app">
    <div id="app">
      <transition  name="view">
        <router-view :key="$route.params.id"/>
      </transition>
     
    </div>
  </transition>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>


<style>
@font-face {
  font-family: ArchitectsDaughter;
  src: url("./assets/fonts/ArchitectsDaughter-Regular.ttf");
}

body {
  background: #ffeee2;
  margin: 0;
  padding: 0;
}

#app {
  font-family: ArchitectsDaughter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow-x: hidden;
  min-height: -webkit-fill-available;
}

.page {
  width: 100%;
  max-width: 100%;
  padding: 15px;
  height: 100%;
  min-height: -webkit-fill-available;
  height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
}

.backgroundWave{
  position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    z-index: -1;
  height: auto;
  
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateX(0px);
}

</style>
