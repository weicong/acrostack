import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "src/index.ts",
    dts: true,
    format: ["esm", "cjs"],
    sourcemap: true,
    deps: {
      // 不打包任何依赖，全部作为外部依赖
      neverBundle: [
        "react",
        "react-dom",
        "antd",
        "@tanstack/react-form",
        "@tanstack/form-core",
        "@tanstack/store",
        "dayjs",
      ],
    },
  },
});
