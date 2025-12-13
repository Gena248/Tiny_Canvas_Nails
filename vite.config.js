import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Tiny_Canvas_Nails/", // replace with your repository name
  build: {
    outDir: "docs",
  },
});
