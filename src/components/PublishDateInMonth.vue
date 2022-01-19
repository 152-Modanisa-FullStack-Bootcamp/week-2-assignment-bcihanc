<template>
  <div class="video-publish-date">{{publishDateInMonth}} month</div>

</template>

<script>
export default {
  name: "PublishDateInMonth",
  props: ["publishDateInMonth"]
}
</script>

<style scoped>
.video-publish-date {
  font-size: 12px;
  padding-left: 8px;
}
</style>
