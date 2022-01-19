<template>
  <img class="owner-avatar" :src="ownerImage" alt="avatar">
</template>

<script>
export default {
  name: "OwnerImage",
  props: ["ownerImage"]
}
</script>

<style scoped>
.owner-avatar {
  vertical-align: middle;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  /*position: relative;*/
  /*top: 8px;*/
}
</style>
