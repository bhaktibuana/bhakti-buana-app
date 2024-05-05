<template>
  <div :class="`side-nav-bar-wrapper ${showSidebar && 'open'}`">
    <div
      :class="`backdrop ${showSidebar ? 'open' : 'close'}`"
      @click="handleBackDropClick"
    ></div>

    <div :class="`sidebar-wrapper ${showSidebar && 'open'}`">
      <div class="title-wrapper" @click="scrollTopTop">
        <base-icon name="brand-binance" :size="26" :stroke="1.5" />
        <h3>Bhakti Buana</h3>
      </div>

      <div class="divider-wrapper">
        <base-divider />
      </div>

      <div class="nav-menu">
        <base-side-navbar-button
          v-for="item in navMenuItems"
          :key="item.id"
          :id="item.id"
          :label="item.label"
          :icon="item.icon"
          :active-section="activeSection"
          @click="handleScrollToSectionId(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from "vue";

import BaseIcon from "@/components/bases/icon/Icon.vue";
import BaseDivider from "@/components/bases/divider/Divider.vue";
import BaseSideNavbarButton from "@/components/bases/button/SideNavbarButton.vue";

import { scrollTopTop } from "@/helpers/functions/scrollToTop";
import { navMenuItems } from "@/helpers/constants/navMenuItems";

const emit = defineEmits(["scrollToSectionId", "onBackdropClick"]);

const safeDocument: Document | Object =
  typeof document !== "undefined" ? document : {};

const hamburgerState: { showSidebar: { value: boolean } } | undefined =
  inject("hamburgerState");

const activeSection = ref<string>("");

const showSidebar = computed(() => {
  return (hamburgerState as { showSidebar: { value: boolean } }).showSidebar
    .value;
});

const handleScroll = () => {
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

const handleBackDropClick = (): void => {
  emit("onBackdropClick", !showSidebar);
};

watch(
  () => showSidebar.value,
  (newValue) => {
    const html = (safeDocument as Document).documentElement;
    html.style.overflow = newValue ? "hidden" : "";
  }
);

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.side-nav-bar-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  left: -300%;
  z-index: 100;

  &.open {
    left: 0;
  }
}

.backdrop {
  width: 100%;
  height: 100%;
  background-color: $backdrop-color;
  display: flex;
  position: fixed;

  &.open {
    animation: backdrop-open 0.3s ease-in-out forwards;

    @keyframes backdrop-open {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &.close {
    animation: backdrop-close 0.3s ease-in-out forwards;

    @keyframes backdrop-close {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}

.sidebar-wrapper {
  width: $size-260;
  height: 100vh;
  background-color: $white;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  display: flex;
  float: right;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 0.3s ease-in-out;
  left: -300%;
  z-index: 110;

  &.open {
    left: 0;
  }
}

.title-wrapper {
  width: 100%;
  height: $size-64;
  padding: $size-16 0;
  padding-left: $size-16;
  display: flex;
  flex-direction: row;
  gap: $size-10;
  align-items: center;
  color: $default-text-color;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > h3 {
    margin: 0;
    font-size: $size-22;
    font-weight: 500;
    line-height: $size-32;
    font-family: $poppins;
  }
}

.divider-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  padding: 0 $size-16;
  margin-bottom: $size-16;
}

.nav-menu {
  width: 100%;
  height: auto;
  padding: $size-8 $size-16;
  display: flex;
  flex-direction: column;
  gap: $size-8;
}
</style>
