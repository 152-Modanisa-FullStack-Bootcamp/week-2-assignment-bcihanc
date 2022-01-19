<template>
  <div class="video-count"> {{viewCount}} views</div>
</template>

<script>
export default {
  name: "ViewCount",
  props: ["viewCount"]
}
</script>

<style scoped>
.video-count {
  font-size: 12px;
}
</style>
