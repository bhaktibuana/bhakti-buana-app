<template>
  <div class="screen-wrapper">
    <base-top-loader :progress-value="progressValue" />

    <div class="icon-wrapper">
      <base-icon name="brand-binance" :size="42" :stroke="1.1" />
    </div>

    <span class="loader-text">{{ loadingText.text + loadingText.dots }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive } from "vue";

import { useHomePageStore } from "@/store";

import BaseTopLoader from "@/components/bases/loader/TopLoader.vue";
import BaseIcon from "@/components/bases/icon/Icon.vue";

const homePageStore = useHomePageStore();

const loadingText = reactive({
  text: "Loading",
  dots: ".",
});

const progressValue = computed<number>(() => {
  return (
    (homePageStore.getCurrentQueries / homePageStore.getTotalQueries) * 100
  );
});

const incrementDots = () => {
  loadingText.dots = loadingText.dots.length < 3 ? loadingText.dots + "." : "";
};

let intervalId = setInterval(incrementDots, 500);

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.screen-wrapper {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  background: $white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: $size-8;
}

.icon-wrapper {
  color: $primary;
  animation: icon-spin 1.5s linear infinite;

  @keyframes icon-spin {
    0% {
      transform: translateY(0px) rotateY(0deg);
    }

    50% {
      transform: translateY(-10px) rotateY(180deg);
    }

    100% {
      transform: translateY(0px) rotateY(360deg);
    }
  }
}

.loader-text {
  width: $size-62;
  margin: 0;
  font-size: $size-14;
  font-weight: 400;
  color: $default-text-color;
}
</style>
