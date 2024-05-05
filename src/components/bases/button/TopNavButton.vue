<template>
  <a :class="`nav-item ${activeSection === id && 'active'}`">{{ label }}</a>
</template>

<script setup lang="ts">
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
});
</script>

<style scoped lang="scss">
a.nav-item {
  width: auto;
  height: $size-32;
  padding: $size-4 0 0 0;
  margin: 0 $size-6;
  font-size: $size-18;
  font-weight: 600;
  line-height: $size-32;
  border-bottom: 0 solid transparent;
  color: $default-text-color;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    border-bottom: $size-2 solid $primary;
    color: $primary;
    padding: $size-4 0;
  }

  &.active {
    border-bottom: $size-2 solid $primary;
    color: $primary;
    padding: $size-4 0;
  }
}
</style>
