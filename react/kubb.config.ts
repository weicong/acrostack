import { defineConfig } from "kubb";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";
import { pluginReactQuery } from "@kubb/plugin-react-query";

const BANNER = `/* oxlint-disable */`;

const GROUP = { type: "tag" } as const;

export default defineConfig({
  input: { path: "https://localhost:44320/swagger/v1/swagger.json" },
  output: { path: "./src/api", clean: true, defaultBanner: false },
  plugins: [
    pluginTs({
      output: { path: "models", banner: BANNER },
      group: GROUP,
    }),
    pluginClient({
      output: { path: "clients", banner: BANNER },
      group: GROUP,
    }),
    pluginReactQuery({
      output: { path: "hooks", banner: BANNER },
      group: GROUP,
      suspense: false,
    }),
  ],
} as Parameters<typeof defineConfig>[0]);
