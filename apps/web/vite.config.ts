import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

// Deliberately off Vite's 5173 / 4173: those are *every* Vite project's defaults,
// so they collide with any other Vite checkout on the machine. Worse, Vite's
// default `strictPort: false` resolves a collision by silently moving to the next
// free port, which makes whatever URL the README advertises a lie.
//
// Picked to be well clear of the usual suspects (3000 / 5173 / 8080 / 4173), and
// below 49152 so the OS never hands the same number out as an ephemeral port.
const DEV_PORT = 7527;
const PREVIEW_PORT = 7627;

/**
 * A second instance — a parallel worktree, another agent — can take its own port
 * with `PORT=5300 vp dev`. Invalid values fall back rather than crash the server.
 */
function resolvePort(fallback: number) {
  const parsed = Number(process.env.PORT);
  return Number.isInteger(parsed) && parsed > 0 && parsed < 65536 ? parsed : fallback;
}

export default defineConfig({
  resolve: {
    // Vite 8 resolves `paths` from tsconfig.json natively — no `path.resolve` needed.
    tsconfigPaths: true,
  },
  // `strictPort` so the URL is never a lie: fail loudly instead of drifting.
  // Drop it if you would rather always get *a* server on *some* port.
  server: {
    port: resolvePort(DEV_PORT),
    strictPort: true,
  },
  preview: {
    port: resolvePort(PREVIEW_PORT),
    strictPort: true,
  },
  plugins: [
    // oxlint-disable-next-line vite-plus/prefer-vite-plus-imports
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
});
