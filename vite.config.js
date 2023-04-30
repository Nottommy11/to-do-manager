import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  home: "/to-do-manager/",
  plugins: [react()],
});
