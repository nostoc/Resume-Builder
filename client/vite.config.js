import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":{ // This is the path that we want to proxy  {api/auth/sign-up}
      target: "http://localhost:5000",
      secure: false,
      },
    },
  },
});
