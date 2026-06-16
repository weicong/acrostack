# AcroStack - React UI

This project was scaffolded with [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescript.org/).

## Prerequisites

- [Node.js 20.19+ or 22.12+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Start the backend

Before running the React application, make sure your backend API is running:

- Start the host application

## Setup

```bash
npm install
```

## Environment Variables

Create `.env.development` (or use the generated defaults):

- `VITE_API_URL` - Backend API URL (e.g. `https://localhost:` for HttpApi.HostWithIds)
- `VITE_AUTH_URL` - Auth/OIDC issuer URL (same as API for non-tiered setups)
- `VITE_APP_URL` - App URL for OAuth redirect (default: `http://localhost:5173`)

**Important:** `VITE_API_URL` and `VITE_AUTH_URL` must match your backend. The template replaces placeholders during solution generation; if you use a different port, update `.env.development` accordingly.

Restart the Vite dev server after changing `.env.development`—the proxy target is read at startup.

For production builds, set these before `npm run build` or configure at deploy time via `dynamic-env.json`.

## Development

```bash
npm run dev
```

The app runs at `http://localhost:5173`. All API requests (GET, POST, PUT, DELETE) go to `http://localhost:5173/api/...`; Vite proxies them transparently to the backend. The same applies to `/connect` (OAuth) and `/getEnvConfig`. The Network tab will show `localhost:5173` as the request URL—this is expected; the proxy forwards to the backend.

## Generate API Proxies

To regenerate TypeScript API client from the backend (e.g. after adding new app services):

1. Start the backend (HttpApi.Host or HttpApi.HostWithIds)
2. Run:

```bash
npm run generate-proxy
```

This uses `abp generate-proxy -t js` against the running API. The script URL in `package.json` is configured for the solution's API port.

## Build

```bash
npm run build
```

Output: `dist/`

## Preview Production Build

```bash
npm run preview
```

## Docker

Build the Docker image (from `react/` directory):

```bash
npm run build
docker build -t acrostack/react:latest .
```

For local pre-built assets: `docker build -f Dockerfile.local -t acrostack/react:local .`

## Tests

```bash
npm run test        # watch mode
npm run test:run    # single run
```

## Scripts

| Script           | Description                      |
| ---------------- | -------------------------------- |
| `dev`            | Start Vite dev server            |
| `build`          | TypeScript + Vite production     |
| `preview`        | Preview production build         |
| `test`           | Run Vitest (watch)               |
| `test:run`       | Run Vitest once                  |
| `generate-proxy` | Generate API client from backend |
| `lint`           | ESLint                           |
| `format`         | Prettier format                  |

## Environment Configuration

### Development Environment

The development environment configuration is in `.env.development`. Update `VITE_API_URL` and `VITE_AUTH_URL` to point to your backend API.

### Production Environment

For production, the application uses dynamic environment configuration through the `dynamic-env.json` file. This allows you to configure environment variables at deployment time without rebuilding the application.

The web server's `/getEnvConfig` endpoint is configured by default to serve the environment configuration.

## Additional Resources

- [ABP Documentation](https://abp.io/docs/latest)
- [Vite Documentation](https://vite.dev/guide/)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [shadcn/ui Components](https://ui.shadcn.com/)
