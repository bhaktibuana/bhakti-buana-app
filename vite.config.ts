import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        sourceMap: false,
        additionalData(source: string) {
          let prepends = "";
          prepends += `@import "./src/assets/styles/colors.scss";`;
          prepends += `@import "./src/assets/styles/fonts.scss";`;
          prepends += `@import "./src/assets/styles/screen.scss";`;
          prepends += `@import "./src/assets/styles/spacer.scss";`;
          prepends += source;

          return prepends;
        },
      },
    },
  },
});
