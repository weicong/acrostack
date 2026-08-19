import { defineConfig } from "kubb/config";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginAxios } from "@kubb/plugin-axios";
import { pluginReactQuery } from "@kubb/plugin-react-query";

const BANNER = `/* oxlint-disable */`;

const GROUP = { type: "tag" } as const;

export default defineConfig({
  input: "http://localhost:5173/swagger/v1/swagger.json",
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
