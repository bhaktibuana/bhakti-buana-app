<template>
  <div class="section-wrapper" id="home">
    <p>Home</p>
  </div>

  <about-section :data="aboutData.data" />

  <div class="section-wrapper" id="skills">
    <p>Skills</p>
  </div>

  <div class="section-wrapper" id="experience">
    <p>Experience</p>
  </div>

  <div class="section-wrapper" id="portfolio">
    <p>Portfolio</p>
  </div>

  <div class="section-wrapper" id="blogs">
    <p>Blog</p>
  </div>

  <div class="section-wrapper" id="contact">
    <p>Contact</p>
  </div>

  <div class="section-wrapper">
    <p>Contact</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

import { useHomePageStore } from "@/store";

import AboutSection from "@/components/pages/public/home/AboutSection.vue";

import { API_PUBLIC } from "@/apis/public";

import { I_AboutData } from "@/pages/public/home/types";

const homePageStore = useHomePageStore();

const aboutData = reactive<I_AboutData>({
  loading: false,
  finished: false,
  querySuccess: false,
  data: {
    location: {} as I_AboutData["data"]["location"],
    resume: {
      url: "",
    } as I_AboutData["data"]["resume"],
    photo: "",
  } as I_AboutData["data"],
});

const fetchAbout = async (): Promise<void> => {
  aboutData.loading = true;
  aboutData.finished = false;

  try {
    const response = await API_PUBLIC.showAbout();
    aboutData.data = response.data.data;
    aboutData.querySuccess = true;
    homePageStore.setCurrentQueries(homePageStore.getCurrentQueries + 1);
  } catch (error) {
    aboutData.querySuccess = false;
  } finally {
    aboutData.loading = false;
    aboutData.finished = true;
  }
};

onMounted(async () => {
  homePageStore.setTotalQueries(1);
  await fetchAbout();
});
</script>

<style scoped lang="scss">
.section-wrapper {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
    font-weight: 800;
    font-size: 40px;
  }
}
</style>
