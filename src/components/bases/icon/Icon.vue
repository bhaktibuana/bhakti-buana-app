<template>
  <IconBrandBinance
    v-if="name === 'brand-binance'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconUserFilled
    v-if="name === 'user-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconMailFilled
    v-if="name === 'mail-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconMapPinFilled
    v-if="name === 'map-pin-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconHomeFilled
    v-if="name === 'home-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconGhostFilled
    v-if="name === 'ghost-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconCodeCircle2Filled
    v-if="name === 'code-circle-2-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconAppsFilled
    v-if="name === 'apps-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconStack2Filled
    v-if="name === 'stack-2-filled'"
    :size="size"
    :stroke-width="stroke"
  />
  <IconArticleFilled
    v-if="name === 'article-filled'"
    :size="size"
    :stroke-width="stroke"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";

import {
  IconBrandBinance,
  IconUserFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconHomeFilled,
  IconGhostFilled,
  IconCodeCircle2Filled,
  IconAppsFilled,
  IconStack2Filled,
  IconArticleFilled,
} from "@tabler/icons-vue";

import { T_IconName } from "@/components/bases/icon/types";

defineProps({
  name: {
    type: String as PropType<T_IconName>,
    required: true,
  },
  size: {
    type: Number,
    default: 16,
  },
  stroke: {
    type: Number,
    default: 1,
  },
});
</script>
