import NotFound from "@/pages/notFound/NotFound.vue";

import NotFoundLayout from "@/components/layouts/public/NotFoundLayout.vue";

import { T_Routes } from "@/routers/types";

export const NotFoundRoutes: T_Routes[] = [
  {
    name: "not_found",
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      isPrivatePage: false,
      isAuthPage: false,
      layout: NotFoundLayout,
    },
  },
];
