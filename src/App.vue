<template>
  <component :is="$route?.meta.layout" v-if="$route?.meta.layout">
    <router-view />
  </component>
</template>
