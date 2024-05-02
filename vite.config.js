// vite.config.js
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    legacy({
      // targets: ["defaults", "not IE 11"],
      // targets: "last 5 versions and not dead, > 0.3%, Firefox ESR",
      targets: {
        firefox: "69"
      },
    }),
  ],
});
