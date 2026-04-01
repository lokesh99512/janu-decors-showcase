import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/janu-decors-showcase/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ ADD THIS BLOCK
  build: {
    rollupOptions: {
      external: ["fsevents"],
    },
  },
});