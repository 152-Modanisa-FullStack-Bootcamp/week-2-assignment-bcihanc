<template>
  <div class="owner-name"> {{ ownerName }}</div>
</template>

<script>
export default {
  name: "OwnerName",
  props: ["ownerName"]
}
</script>

<style scoped>
.owner-name {
  font-size: 14px;
}
</style>
