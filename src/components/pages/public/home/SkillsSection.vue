<template>
  <section-layout id="skills" style="background-color: rgb(241, 245, 249)">
    <section-title
      first-label="Skills &"
      second-label="Abilities"
      icon="code-circle-2-filled"
    />

    <div class="section-body">
      <div class="skill-card"></div>
    </div>
  </section-layout>
</template>

<script setup lang="ts">
import SectionLayout from "@/components/layouts/public/home/SectionLayout.vue";
import SectionTitle from "@/components/pages/public/home/SectionTitle.vue";
</script>

<style scoped lang="scss">
.section-body {
  width: 100%;
  height: auto;
  padding: $size-24 $size-44 $size-14;
  display: grid;
  gap: $size-20;
  grid-template-columns: repeat(6, minmax(0px, 1fr));

  @include breakpoint(lg, max) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }

  @include breakpoint(md, max) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }

  @include breakpoint(sm, max) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    padding: $size-14 $size-8;
  }
}

.skill-card {
  width: 100%;
  height: $size-120;
  padding: $size-10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 22, 0.9);
  border-radius: $size-10;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
