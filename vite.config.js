import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const genaiWebEntry = path
  .resolve(__dirname, "node_modules/@google/genai/dist/web/index.mjs")
  .replace(/\\/g, "/");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@google/genai",
        replacement: genaiWebEntry,
      },
      {
        find: "@google/genai/web",
        replacement: genaiWebEntry,
      },
    ],
  },
});
