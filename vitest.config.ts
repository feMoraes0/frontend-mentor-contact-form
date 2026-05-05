/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/vitest-setup.ts"],
    globals: true,
    coverage: {
      exclude: ["*/**/main.ts", "*.config.*", "*/**/*.d.ts", "dist/*"],
      thresholds: {
        statements: 60,
        functions: 100,
        branches: 100,
        lines: 60,
      },
    },
    sequence: {
      shuffle: true,
    },
  },
});
