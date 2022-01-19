<template>
  <div class="video-title">{{title}}</div>
</template>

<script>
export default {
  name: "VideoTitle",
  props : ["title"]
}
</script>

<style scoped>

.video-title {
  /*font-size: 32px;*/
  text-align: left;
}
</style>
