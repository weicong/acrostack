FROM node:20-alpine AS build

WORKDIR /app

# 本仓库使用 pnpm（只有 pnpm-lock.yaml）与 Vite+ 工具链：
# 通过 Corepack 启用锁定版本，再跑 package.json 的 build 脚本（= vp check && vp build）。
RUN corepack enable && corepack prepare pnpm@11.8.0 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN pnpm install --frozen-lockfile

COPY . /app

RUN pnpm run build

FROM nginx:alpine
COPY dynamic-env.json /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
