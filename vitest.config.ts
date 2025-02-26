import { configDefaults, defineConfig } from "vitest/config";
import { join } from "path";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.test.ts?(x)"],
    coverage: {
      provider: "istanbul",
      reportsDirectory: join(__dirname, "coverage"),
      reporter: [
        ["html", { subdir: "html-report" }], // required for this setup, must be nested within its own folder to avoid getting confused with the other reports
        ["json-summary"], // required for this setup
        ["text"], // OPTIONAL, you can use any additional reports that you like
      ],
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90,
      },
      reportOnFailure: true,
      exclude: [
        ...configDefaults.exclude,
        ".github/**",
        "node_modules/**",
        "playwright-reports/**",
        "test-results/**",
        "tests/**",
        ".gitignore",
        "package.json",
        "playwright.config.ts",
        "pnpm-lock.yaml",
        "README.md",
        "vitest.config.ts",
      ],
    },
  },
});
