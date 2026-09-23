FROM node:22-alpine AS build

WORKDIR /app

# 本仓库使用 pnpm 与 Vite+ 工具链（Monorepo：工作区根在 react/）。
# 构建上下文是**仓库根**，因此下面的 COPY 路径都从 react/ 开始；
# vp 命令由 vite-plus 依赖提供（node_modules/.bin/vp），镜像内无需全局安装。
RUN corepack enable && corepack prepare pnpm@12.5.1 --activate

# 先复制工作区清单与锁文件，让依赖安装层可缓存
COPY react/package.json react/pnpm-lock.yaml react/pnpm-workspace.yaml /app/
COPY react/apps/web/package.json /app/apps/web/
COPY react/packages/core/package.json /app/packages/core/
COPY react/packages/ui/package.json /app/packages/ui/
COPY react/packages/api-client/package.json /app/packages/api-client/
RUN pnpm install --frozen-lockfile

# 复制整个前端工作区并构建（工作区根脚本 = vp -C apps/web build）
COPY react/ /app
RUN pnpm run build

FROM nginx:alpine
COPY react/apps/web/dynamic-env.json /usr/share/nginx/html
COPY react/apps/web/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/apps/web/dist /usr/share/nginx/html
