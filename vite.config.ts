import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// BASE_PATH lo define el workflow de GitHub Pages.
// Con dominio propio (ej. sunsetexperience.cl) debe ser "/".
// En topja.github.io/sunset-experience debe ser "/sunset-experience/".
export default defineConfig(() => ({
  base: process.env.BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
