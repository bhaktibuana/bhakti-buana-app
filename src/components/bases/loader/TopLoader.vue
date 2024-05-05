<template>
  <div class="top-loader-background"></div>
  <div class="top-loader" :style="{ width: `${progressValue}%` }"></div>
</template>

<script setup lang="ts">
defineProps({
  progressValue: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
.top-loader-background {
  width: 100%;
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $input-border;
  z-index: 500;
}

.top-loader {
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $primary;
  transition: width 0.1s ease-in-out;
  z-index: 501;
}
</style>
