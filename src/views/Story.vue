<template>
  <div class="story page">
    <router-link v-ripple to="/" class="return-button">
      <v-icon name="arrow-left"></v-icon>
    </router-link>
    <img class="bee" src="../assets/bee.png" />
    <div class="story-row">
      <img
        src="https://www.webfx.com/blog/images/cdn.designinstruct.com/files/582-how-to-image-placeholders/generic-image-placeholder.png"
        alt="prent"
        class="story-image"
      />
      <div class="card">
        <p class="card-text">{{getPage.text}}</p>
      </div>
    </div>

    <div class="page-nav">
      <a class="nav-button" v-ripple @click="previous">
        <v-icon class="icon-left" name="arrow-left"></v-icon>
      </a>
      <p>{{getPage.id}}/{{pageCount}}</p>
      <a class="nav-button" v-ripple @click="next">
        <v-icon class="icon-right" name="arrow-right"></v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "story",
  computed: {
    pageCount() {
      return this.$store.getters.pageCount;
    },
    getPage() {
      var id = this.$route.params.id;
      return this.$store.getters.getPageById(parseInt(id));
    }
  },
  methods: {
    next() {
      var id = parseInt(this.$route.params.id);
      id++;
      this.$router.push({ path: `/story/${id}` });
    },
    previous() {
      var id = parseInt(this.$route.params.id);
      id--;
      this.$router.push({ path: `/story/${id}` });
    }
  }
};
</script>

<style scoped>
.return-button {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 1em;
  background: #6fcfc7;
  border-radius: 2em;
  width: 30px;
  height: 30px;
  color: white;
}

.story {
  display: flex;
  flex-direction: column;
}

.bee {
  width: 10vw;
  max-width: 200px;
  height: auto;
  margin-top: 10vh;
  min-width: 100px;
  align-self: flex-end;
  margin-right: 20vw;
}

.card-text {
  font-size: 30px;
  margin: 0px;
}

.story-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.card {
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 2em;
  padding: 2em 2.5em 2em 2.5em;
  display: flex;
  margin-left: 2em;
  align-items: center;
  word-break: break-word;
  text-align: left;
  align-self: center;
  height: fit-content;
  margin-right: 2em;
  max-width: 800px;
}

.story-image {
  width: 250px;
  height: 250px;
  align-self: center;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
  margin-left: 2em;
}

@media only screen and (max-width: 768px) {
  .bee {
    display: none;
  }

  .story-row {
    flex-wrap: wrap;
  }

  .card {
    margin: 0;
  }

  .card-text {
    font-size: 20px;
  }
  .story-image {
    margin-bottom: 2em;
    margin-top: 70px;
    margin-left: 0;
  }
}



.page-nav {
  display: flex;
  justify-content: center;
  background: #6fcfc7;
  border-radius: 2em;
  margin-top: 2em;
  align-items: center;
  width: fit-content;
  align-self: center;
  color: white;
}

.page-nav p {
  font-size: 30px;
  margin: 0;
  color: black;
  background: white;
  padding: 0.3em 1em 0.2em 1em;
}

.page-nav a {
  margin: 0px;
  padding: 0px;
}

.icon-left {
  width: auto;
  height: 50px;
  padding-left: 0.5em;
}

.icon-right {
  width: auto;
  height: 50px;
  padding-right: 0.5em;
}
</style>