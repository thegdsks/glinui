import tsconfigPaths from "tsconfig-paths"
import { defineConfig } from "tsup"

tsconfigPaths.register({
  baseUrl: "./",
  paths: {
    "@/*": ["./*"],
    "@/src/*": ["src/*"],
  },
})

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/registry/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
})
