import { defineConfig } from "kubb/config";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginAxios } from "@kubb/plugin-axios";
import { pluginReactQuery } from "@kubb/plugin-react-query";

const BANNER = `/* oxlint-disable */`;

const GROUP = { type: "tag" } as const;

// 默认经 Vite dev server 代理读取后端 Swagger；
// 可经 KUBB_INPUT 环境变量直连后端（如 CI：KUBB_INPUT=https://localhost:44320/swagger/v1/swagger.json）
const INPUT = process.env.KUBB_INPUT ?? "http://localhost:5173/swagger/v1/swagger.json";

export default defineConfig({
  input: INPUT,
  output: { path: "./src/api", clean: true, defaultBanner: false },
  plugins: [
    pluginTs({
      output: { path: "models", banner: BANNER },
      group: GROUP,
    }),
    pluginAxios({
      output: { path: "clients", banner: BANNER },
      group: GROUP,
    }),
    pluginReactQuery({
      output: { path: "hooks", banner: BANNER },
      group: GROUP,
      suspense: false,
      hooks: true,
    }),
  ],
} as Parameters<typeof defineConfig>[0]);
