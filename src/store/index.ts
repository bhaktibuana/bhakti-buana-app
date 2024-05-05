import { defineStore } from "pinia";

export const useHomePageStore = defineStore("home_page", {
  state: () => ({
    totalQueries: 0,
    currentQueries: 0,
  }),
  getters: {
    getTotalQueries: (state) => state.totalQueries,
    getCurrentQueries: (state) => state.currentQueries,
  },
  actions: {
    setTotalQueries(value: number) {
      this.$state.totalQueries = value;
    },
    setCurrentQueries(value: number) {
      this.$state.currentQueries = value;
    },
  },
});
