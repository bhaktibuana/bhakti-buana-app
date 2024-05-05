<template>
  <section-layout id="about">
    <section-title first-label="About" second-label="Me" icon="user-filled" />

    <div class="section-body">
      <div class="photo-wrapper">
        <base-about-image :src="data.photo" />
      </div>

      <div class="description-wrapper">
        <h3 class="nickname">I'm {{ data.nick_name }}</h3>
        <h4 class="role">{{ data.role }}</h4>
        <p class="summary">{{ data.summary }}</p>

        <div class="contact-wrapper">
          <div class="contact-item-wrapper">
            <div class="icon-wrapper">
              <base-icon name="mail-filled" :size="18" />
            </div>

            <p>{{ data.email }}</p>
          </div>

          <div class="contact-item-wrapper">
            <div class="icon-wrapper">
              <base-icon name="map-pin-filled" :size="18" />
            </div>

            <p>
              {{ data.location.city }} - {{ data.location.province }},
              {{ data.location.country }}
            </p>
          </div>
        </div>

        <base-download-resume-button :url="data.resume.url" />
      </div>
    </div>
  </section-layout>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import SectionLayout from "@/components/layouts/public/home/SectionLayout.vue";
import SectionTitle from "@/components/pages/public/home/SectionTitle.vue";
import BaseIcon from "@/components/bases/icon/Icon.vue";
import BaseDownloadResumeButton from "@/components/bases/button/DownloadResumeButton.vue";
import BaseAboutImage from "@/components/bases/image/AboutImage.vue";

import { I_AboutData } from "@/pages/public/home/types";

defineProps({
  data: {
    type: Object as PropType<I_AboutData["data"]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.section-body {
  width: 100%;
  height: auto;
  padding: $size-14 $size-24;
  display: flex;
  flex-direction: row;

  @include breakpoint(md, max) {
    flex-direction: column;
    gap: $size-80;
  }

  @include breakpoint(sm, max) {
    padding: $size-14 $size-8;
    gap: $size-50;
  }
}

.photo-wrapper {
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: center;

  @include breakpoint(md, max) {
    width: 100%;
  }
}

.description-wrapper {
  width: 100%;
  height: auto;
  padding-left: $size-100;
  padding-right: $size-50;
  display: flex;
  flex-direction: column;

  @include breakpoint(lg, max) {
    padding-left: $size-30;
    padding-right: $size-14;
  }

  @include breakpoint(md, max) {
    padding: 0 $size-80;
  }

  @include breakpoint(sm, max) {
    padding: 0;
  }
}

h3.nickname,
h4.role {
  margin: 0;
  font-weight: 600;
  font-family: $poppins;
}

h3.nickname {
  font-size: $size-24;
  color: $default-text-color;
}

h4.role {
  font-size: $size-14;
  color: $text-description;
}

p.summary {
  margin: $size-16 0;
  font-size: $size-16;
  font-weight: 400;
  color: $default-text-color;
  text-align: justify;
}

.contact-wrapper {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: $size-6;

  & > .contact-item-wrapper {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $size-10;

    & > .icon-wrapper {
      width: $size-28;
      height: $size-28;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      border: $size-1 solid $primary;
      color: $primary;
    }

    & > p {
      margin: 0;
      font-size: $size-16;
      font-weight: 600;
      color: $default-text-color;
    }
  }
}
</style>
