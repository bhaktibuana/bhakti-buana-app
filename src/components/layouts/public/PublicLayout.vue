<template>
  <div class="public-layout-wrapper">
    <top-nav-bar @scroll-to-section-id="scrollToSection" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import TopNavBar from "@/components/layouts/navigation/topNavBar/TopNavBar.vue";

import { scrollTopTop } from "@/helpers/functions/scrollToTop";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionRect = section.getBoundingClientRect();
    const absoluteTop = sectionRect.top + window.pageYOffset;

    window.scrollTo({
      top: absoluteTop - 64,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  scrollTopTop();
});
</script>

<style scoped lang="scss">
.public-layout-wrapper {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: $white;
  position: relative;
}
</style>
