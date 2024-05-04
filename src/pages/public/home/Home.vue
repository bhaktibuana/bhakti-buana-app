<template>
  <div class="section-wrapper" id="home">
    <p>Home</p>
  </div>

  <div class="section-wrapper" id="about">
    <p>About</p>
  </div>

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
