import Home from "@/pages/public/home/Home.vue";

import PublicLayout from "@/components/layouts/public/PublicLayout.vue";

import { T_Routes } from "@/routers/types";

export const PublicRoutes: T_Routes[] = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      isPrivatePage: false,
      isAuthPage: false,
      layout: PublicLayout,
    },
  },
];
