<template>
  <img @mouseover="hover = true" @mouseleave="hover = false" class="cover-image" width="360" height="200"
       :src="hover ? hoverImage :coverImage"
       alt=""/>
</template>

<script>
export default {
  name: "CoverImage",
  props: ["coverImage", "hoverImage"],
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.cover-image {
  height: 200px;
  width: 360px;
}
</style>
