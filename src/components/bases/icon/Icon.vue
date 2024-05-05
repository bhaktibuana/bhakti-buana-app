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
</template>

<script setup lang="ts">
import {
  IconBrandBinance,
  IconUserFilled,
  IconMailFilled,
  IconMapPinFilled,
} from "@tabler/icons-vue";

defineProps({
  name: {
    type: String,
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
