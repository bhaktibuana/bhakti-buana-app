<template>
  <div
    :class="`hamburger-button ${isOpen?.showSidebar.value ? 'open' : 'close'}`"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const emit = defineEmits(["onClick"]);

const isOpen: { showSidebar: { value: boolean } } | undefined =
  inject("hamburgerState");
</script>

<style scoped lang="scss">
.hamburger-button {
  width: 20px;
  height: 15px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: $default-text-color;
    border-radius: 18px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2),
  span:nth-child(3) {
    top: 6px;
  }

  & span:nth-child(4) {
    top: 12px;
  }

  &.open span:nth-child(1) {
    top: 6px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 6px;
    width: 0%;
    left: 50%;
  }
}
</style>
