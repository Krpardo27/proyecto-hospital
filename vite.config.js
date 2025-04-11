import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mi App de Hospital",
        short_name: "Hospital",
        description: "Una app de hospital",
        theme_color: "#f9f9f9",
        background_color: "#f9f9f9",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/icons/logo.png",
            sizes: "200x200",
            type: "image/png",
          },
          {
            src: "/icons/logo.png",
            sizes: "150x150",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  base: './',
});
