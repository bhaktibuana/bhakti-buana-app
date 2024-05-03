import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        exclude: ["src/api/types/**"],
      },
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
      environment: "jsdom",
    },
  })
);
