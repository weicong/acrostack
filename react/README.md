# AcroStack - React UI

This project uses [Vite+](https://viteplus.dev/) — the unified web toolchain (Vite, Rolldown, Vitest, Oxlint, Oxfmt, tsdown, Vite Task) alongside [React](https://react.dev/) and [TypeScript](https://www.typescript.org/).

## Prerequisites

- Install the `vp` CLI ([instructions](https://viteplus.dev/guide/#install-vp))
- Node.js is managed automatically by `vp env`; no manual installation required

### Start the backend

Before running the React application, make sure your backend API is running:

- Start the host application

## Setup

```bash
vp install
```

## Environment Variables

Create `.env.development` (or use the generated defaults):

- `VITE_API_URL` - Backend API URL (e.g. `https://localhost:` for HttpApi.HostWithIds)
- `VITE_AUTH_URL` - Auth/OIDC issuer URL (same as API for non-tiered setups)
- `VITE_APP_URL` - App URL for OAuth redirect (default: `http://localhost:5173`)

**Important:** `VITE_API_URL` and `VITE_AUTH_URL` must match your backend. The template replaces placeholders during solution generation; if you use a different port, update `.env.development` accordingly.

Restart the dev server after changing `.env.development`—the proxy target is read at startup.

For production builds, set these before `vp build` or configure at deploy time via `dynamic-env.json`.

## Development

```bash
vp dev
```

The app runs at `http://localhost:5173`. All API requests (GET, POST, PUT, DELETE) go to `http://localhost:5173/api/...`; Vite proxies them transparently to the backend. The same applies to `/connect` (OAuth) and `/getEnvConfig`. The Network tab will show `localhost:5173` as the request URL—this is expected; the proxy forwards to the backend.

## Generate API Proxies

To regenerate TypeScript API client from the backend (e.g. after adding new app services):

1. Start the backend (HttpApi.Host or HttpApi.HostWithIds)
2. Run:

```bash
vp run generate-proxy
```

This uses `abp generate-proxy -t js` against the running API. The script URL in `package.json` is configured for the solution's API port.

## Build

```bash
vp build
```

Output: `dist/`

## Preview Production Build

```bash
vp preview
```

## Docker

Build the Docker image (from `react/` directory):

```bash
vp build
docker build -t acrostack/react:latest .
```

For local pre-built assets: `docker build -f Dockerfile.local -t acrostack/react:local .`

## Tests

```bash
vp test          # watch mode
vp test run      # single run
```

## Scripts

| Script           | Description                      |
| ---------------- | -------------------------------- |
| `dev`            | `vp dev` — start Vite dev server |
| `build`          | `vp build` — production build    |
| `preview`        | `vp preview` — preview build     |
| `check`          | `vp check` — format, lint, type  |
| `test`           | `vp test` — Vitest (watch)       |
| `test:run`       | `vp test run` — Vitest once      |
| `generate-proxy` | Generate API client from backend |
| `lint`           | `vp lint` — Oxlint               |
| `fmt`            | `vp fmt` — Oxfmt                 |

## Environment Configuration

### Development Environment

The development environment configuration is in `.env.development`. Update `VITE_API_URL` and `VITE_AUTH_URL` to point to your backend API.

### Production Environment

For production, the application uses dynamic environment configuration through the `dynamic-env.json` file. This allows you to configure environment variables at deployment time without rebuilding the application.

The web server's `/getEnvConfig` endpoint is configured by default to serve the environment configuration.

## Additional Resources

- [ABP Documentation](https://abp.io/docs/latest)
- [Vite+ Documentation](https://viteplus.dev/guide/)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [shadcn/ui Components](https://ui.shadcn.com/)
