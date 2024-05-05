<template>
  <div class="public-layout-wrapper">
    <div v-show="true">
      <top-nav-bar
        @scroll-to-section-id="scrollToSection"
        @on-hamburger-click="handleHamburgerClick"
      />

      <side-nav-bar
        @scroll-to-section-id="scrollToSection"
        @on-backdrop-click="handleHamburgerClick"
      />

      <slot></slot>
    </div>

    <loading-screen />
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from "vue";

import TopNavBar from "@/components/layouts/navigation/topNavBar/TopNavBar.vue";
import SideNavBar from "@/components/layouts/navigation/sideNavBar/SideNavBar.vue";
import LoadingScreen from "@/components/layouts/public/home/LoadingScreen.vue";

import { scrollTopTop } from "@/helpers/functions/scrollToTop";

const showSidebar = ref<boolean>(false);

provide("hamburgerState", { showSidebar });

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

const handleHamburgerClick = (state: boolean): void => {
  showSidebar.value = state;
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
