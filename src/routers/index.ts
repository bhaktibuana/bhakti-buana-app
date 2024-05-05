import { createRouter, createWebHistory } from "vue-router";

import { PublicRoutes } from "@/routers/publicRoutes";
import { NotFoundRoutes } from "@/routers/notFoundRoutes";

import { scrollTopTop } from "@/helpers/functions/scrollToTop";

const routes = [...PublicRoutes, ...NotFoundRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((_to, _from, next) => {
  scrollTopTop();

  next();
});

export default router;
