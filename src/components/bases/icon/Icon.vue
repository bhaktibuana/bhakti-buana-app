<template>
  <IconBrandBinance
    v-if="name === 'brand-binance'"
    :size="size"
    :stroke-width="stroke"
  />
</template>

<script setup lang="ts">
import { IconBrandBinance } from "@tabler/icons-vue";

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
