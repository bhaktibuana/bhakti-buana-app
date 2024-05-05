<template>
  <a :class="`nav-item ${activeSection === id && 'active'}`">
    <div class="icon-wrapper">
      <base-icon :name="icon" :size="20" />
    </div>

    <span class="label">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import BaseIcon from "@/components/bases/icon/Icon.vue";

import { T_IconName } from "@/components/bases/icon/types";

defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  activeSection: {
    type: String,
    default: "",
  },
  icon: {
    type: String as PropType<T_IconName>,
    default: "",
  },
});
</script>

<style scoped lang="scss">
a.nav-item {
  width: 100%;
  height: $size-40;
  padding: 0 $size-8;
  margin: 0;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $size-12;
  border-radius: $size-4;
  background-color: $grey;

  & > .icon-wrapper {
    width: $size-30;
    height: $size-30;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $default-text-color;
  }

  & > span.label {
    margin: 0;
    font-size: $size-16;
    font-weight: 400;
    color: $default-text-color;
  }

  &.active {
    background-color: $primary;

    & > .icon-wrapper {
      color: $white;
    }

    & > span.label {
      font-weight: 500;
      color: $white;
    }
  }
}
</style>
