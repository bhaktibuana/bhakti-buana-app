<template>
  <nav
    class="top-nav-bar-wrapper"
    :style="{
      background: backgroundColor,
      boxShadow: shadow,
      backdropFilter: filter,
    }"
  >
    <div class="title" @click="scrollTopTop">
      <base-icon name="brand-binance" :size="26" :stroke="1.5" />
      <h3>Bhakti Buana</h3>
    </div>

    <div class="nav-menu">
      <base-top-nav-button
        v-for="item in navMenuItems"
        :key="item.id"
        :id="item.id"
        :label="item.label"
        :active-section="activeSection"
        @click="handleScrollToSectionId(item.id)"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

import BaseTopNavButton from "@/components/bases/button/TopNavButton.vue";
import BaseIcon from "@/components/bases/icon/Icon.vue";

import { scrollTopTop } from "@/helpers/functions/scrollToTop";
import { navMenuItems } from "@/helpers/constants/navMenuItems";

const emit = defineEmits(["scrollToSectionId"]);

const thresholdScroll = 500;

const backgroundColor = ref<string>("rgba(255, 255, 255 0)");
const shadow = ref<string>("none");
const filter = ref<string>("none");
const activeSection = ref<string>("");

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const opacity = Math.min(scrollTop / thresholdScroll, 0.8);
  backgroundColor.value = `rgba(255, 255, 255, ${opacity})`;

  if (scrollTop > 0) {
    shadow.value = "rgba(146, 161, 176, 0.3) 0px 1px 4px";
    filter.value = "blur(5px)";
  } else {
    shadow.value = "none";
    filter.value = "none";
  }

  const sections = navMenuItems.map((item) => item.id);
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        if (rect.bottom <= 64) {
          activeSection.value = sections[sections.indexOf(sectionId) + 1];
        } else {
          activeSection.value = sectionId;
        }
      }
    }
  }
};

const handleScrollToSectionId = (sectionId: string) => {
  emit("scrollToSectionId", sectionId);
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.top-nav-bar-wrapper {
  width: 100%;
  height: $size-64;
  position: fixed;
  padding: $size-16 calc(-1 * $size-720 + 50vw);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ease-in-out;
  z-index: 50;

  @include breakpoint(xl, max) {
    padding: $size-16 calc(-1 * $size-512 + 50vw);
  }

  @include breakpoint(lg, max) {
    padding: $size-16 calc(-1 * $size-384 + 50vw);
  }

  @include breakpoint(md, max) {
    padding: $size-16;
  }
}

.title {
  width: auto;
  height: $size-32;
  display: flex;
  flex-direction: row;
  gap: $size-10;
  align-items: center;
  color: $default-text-color;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: $primary;
  }

  & > h3 {
    margin: 0;
    font-size: $size-22;
    font-weight: 500;
    line-height: $size-32;
    font-family: $poppins;
  }
}

.nav-menu {
  width: auto;
  display: inline;

  @include breakpoint(md, max) {
    display: none;
  }
}
</style>
