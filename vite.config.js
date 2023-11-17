// import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    root: "./src",
    server: {
      proxy: {
        "/api": {
          target: "https://image.tmdb.org/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    define: {
      "process.env": env,
    },
  };
});
