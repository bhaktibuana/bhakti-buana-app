<template>
  <div class="image-wrapper">
    <div class="image-card">
      <img :src="src" alt="about-photo" class="about-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.image-wrapper {
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-card {
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 3/4;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    background-image: linear-gradient(180deg, $primary, $primary);
    height: 130%;
    animation: rotBGimg 7s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    0% {
      transform: rotate(0deg);
      opacity: 70%;
      box-shadow:
        0 0 5px $primary,
        0 0 10px $primary,
        0 0 15px $primary,
        0 0 20px $primary,
        0 0 35px $primary,
        0 0 40px $primary,
        0 0 50px $primary,
        0 0 75px $primary;
    }

    50% {
      opacity: 100%;
      box-shadow:
        0 0 10px $primary,
        0 0 20px $primary,
        0 0 30px $primary,
        0 0 40px $primary,
        0 0 70px $primary,
        0 0 80px $primary,
        0 0 100px $primary,
        0 0 150px $primary;
    }

    100% {
      transform: rotate(360deg);
      opacity: 70%;
      box-shadow:
        0 0 5px $primary,
        0 0 10px $primary,
        0 0 15px $primary,
        0 0 20px $primary,
        0 0 35px $primary,
        0 0 40px $primary,
        0 0 50px $primary,
        0 0 75px $primary;
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 20px;
  }
}

img.about-image {
  width: 98%;
  height: auto;
  aspect-ratio: 3/4;
  border-radius: inherit;
  z-index: 1;
  box-shadow: 0 0 3px $primary-dark;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
