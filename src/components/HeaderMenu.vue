<template>
  <div class="menu">
    <div class="link">
      <input v-if="isHomePage" @click="goToFavoritesPage" type="button" value="Favorites">
      <input v-if="isFavoritesPage" @click="goToHomePage" type="button" value="Home">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  methods: {
    goToFavoritesPage(){
      this.$router.push("/favorites")
    },
    goToHomePage(){
      this.$router.push("/")
    }
  },
  computed: {
    isFavoritesPage(){
      return this.$route.path === "/favorites";
    },
    isHomePage(){
      return this.$route.path === "/";
    }
  },
}
</script>

<style scoped>
.menu{
  width: 100%;
  height: 50px;
  padding-bottom: 32px;
}
.link{
  text-align: right;
  position: relative;
  top: 12px;
}
</style>
