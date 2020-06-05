<template>
  <transition name="app">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/story">About</router-link>
      </div>
      <transition name="view">
        <router-view />
      </transition>
    </div>
  </transition>
</template>

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.page {
  width: 100%;
  max-width: 100%;
  padding: 15px;
  box-sizing: border-box;
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

.app-enter-active,
.app-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.app-enter-active {
  transition-delay: 0.5s;
}

.app-enter,
.app-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.app-enter-to,
.app-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>
