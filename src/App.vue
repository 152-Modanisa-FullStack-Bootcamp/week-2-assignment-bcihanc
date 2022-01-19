<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
  </div>
</template>

<script>


import HeaderMenu from "@/components/HeaderMenu";
import {FETCH_VIDEOS_ACTION} from "@/store";
import {mapActions} from "vuex/dist/vuex.esm.browser";

export default {
  name: 'App',
  components: {
    HeaderMenu
  },
  methods: {
    ...mapActions([FETCH_VIDEOS_ACTION])
  },
  mounted() {
    this[FETCH_VIDEOS_ACTION]()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
