<template>
  <div class="section-title">
    <div class="icon-wrapper">
      <base-icon :name="icon" :size="40" />
    </div>

    <h1>
      {{ firstLabel }} <span>{{ secondLabel }}</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import BaseIcon from "@/components/bases/icon/Icon.vue";

import { T_IconName } from "@/components/bases/icon/types";

defineProps({
  firstLabel: {
    type: String,
    default: "",
  },
  secondLabel: {
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
.section-title {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @include breakpoint(sm, max) {
    flex-direction: column;
  }

  & > .icon-wrapper {
    width: $size-40;
    height: $size-40;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 $size-8;
    color: $default-text-color;
  }

  & > h1 {
    margin: 0 $size-8;
    font-size: $size-32;
    font-weight: 700;
    color: $default-text-color;
    font-family: $poppins;
    line-height: $size-40;

    & > span {
      font-weight: 700;
      color: $primary;
      font-family: $poppins;
    }
  }
}
</style>
