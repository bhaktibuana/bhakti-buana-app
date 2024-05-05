<template>
  <section class="home-section-warpper">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
section.home-section-warpper {
  width: 100%;
  height: auto;
  padding: $size-50 calc(-1 * $size-720 + 50vw);
  display: flex;
  flex-direction: column;
  gap: $size-40;
  transition: 0.3s all ease-in-out;

  @include breakpoint(xl, max) {
    padding: $size-50 calc(-1 * $size-512 + 50vw);
  }

  @include breakpoint(lg, max) {
    padding: $size-50 calc(-1 * $size-384 + 50vw);
  }

  @include breakpoint(md, max) {
    padding: $size-50 $size-16;
    padding-bottom: 0;
  }
}
</style>
