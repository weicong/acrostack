import { describe, expect, it } from "vite-plus/test";
import type { AnyRouter } from "@tanstack/react-router";
import {
  collectNavGroups,
  createRouteLabelIndex,
  matchRouteLabel,
  type NavVisibility,
  type RouteNavMeta,
} from "./route-meta";

/**
 * 路由元数据是「菜单 + 面包屑」的唯一来源，也是本次迁移里新写、逻辑最密的一块
 * （路由树 → 分组 → 权限过滤 → 选中态，以及 URL → 面包屑）。这里用假路由树把它
 * 钉住：不依赖真实 router，也不依赖后端。
 */

type FakeRoute = {
  id: string;
  to: string;
  parentRoute?: FakeRoute;
  options: { staticData?: { nav?: RouteNavMeta; breadcrumb?: { label: string } } };
};

function route(
  id: string,
  to: string,
  staticData?: FakeRoute["options"]["staticData"],
  parentRoute?: FakeRoute,
): FakeRoute {
  return { id, to, parentRoute, options: { staticData } };
}

/** 复刻真实路由树里与菜单有关的那部分。 */
function buildRoutes(): FakeRoute[] {
  const admin = route("admin", "/admin");
  const adminIndex = route(
    "admin/",
    "/admin/",
    { nav: { label: "首页", group: "概览", order: 1 } },
    admin,
  );
  const identity = route(
    "admin/identity",
    "/admin/identity",
    { nav: { label: "身份认证管理", group: "系统", order: 100 } },
    admin,
  );
  const users = route(
    "admin/identity/users",
    "/admin/identity/users",
    {
      nav: {
        label: "用户",
        group: "系统",
        order: 1,
        requiredPolicy: "AbpIdentity.Users",
      },
    },
    identity,
  );
  const roles = route(
    "admin/identity/roles",
    "/admin/identity/roles",
    { nav: { label: "角色", group: "系统", order: 2, requiredPolicy: "AbpIdentity.Roles" } },
    identity,
  );
  const features = route(
    "admin/features",
    "/admin/features",
    { nav: { label: "功能", group: "系统", order: 130, requiredPolicy: "AbpFeatureManagement" } },
    admin,
  );
  const profile = route(
    "admin/profile",
    "/admin/profile",
    { breadcrumb: { label: "个人信息" } },
    admin,
  );

  return [admin, adminIndex, identity, users, roles, features, profile];
}

function fakeRouter(routes: FakeRoute[]): AnyRouter {
  const routesById: Record<string, FakeRoute> = {};
  for (const r of routes) routesById[r.id] = r;
  return { routesById } as unknown as AnyRouter;
}

const allowAll: NavVisibility = () => true;

describe("collectNavGroups", () => {
  it("按 group 分组，组内按 order 升序，带 children 的父项跟随路由树嵌套", () => {
    const groups = collectNavGroups(fakeRouter(buildRoutes()), allowAll, "/admin/identity/users");

    expect(groups.map((g) => g.label)).toEqual(["概览", "系统"]);

    const [overview, system] = groups;
    expect(overview.items.map((i) => i.label)).toEqual(["首页"]);

    // 系统组：身份认证管理（父，含子项）在前，功能在后 —— 按 order 100 / 130
    expect(system.items.map((i) => i.label)).toEqual(["身份认证管理", "功能"]);
    expect(system.items[0].children?.map((c) => c.label)).toEqual(["用户", "角色"]);
  });

  it("把 active 标在命中的最深一层，并向上冒泡到父项", () => {
    const groups = collectNavGroups(fakeRouter(buildRoutes()), allowAll, "/admin/identity/users");
    const identity = groups[1].items[0];

    expect(identity.active).toBe(true);
    expect(identity.children?.find((c) => c.label === "用户")?.active).toBe(true);
    expect(identity.children?.find((c) => c.label === "角色")?.active).toBe(false);
  });

  it("索引项只允许精确匹配：/admin/profile 不该把「首页」点亮", () => {
    const groups = collectNavGroups(fakeRouter(buildRoutes()), allowAll, "/admin/profile");
    expect(groups[0].items[0].active).toBe(false);
  });

  it("按可见性谓词过滤掉无权条目；子项全被过滤时父项整体消失", () => {
    const isVisible: NavVisibility = (meta) => meta.requiredPolicy !== "AbpIdentity.Users";
    const groups = collectNavGroups(fakeRouter(buildRoutes()), isVisible, "/admin");

    const system = groups.find((g) => g.label === "系统");
    // 用户被过滤，角色还在
    expect(system?.items[0].children?.map((c) => c.label)).toEqual(["角色"]);

    // 只剩无权限要求的条目：身份认证管理的两个子项都被挡掉，它自己也不该留下
    // —— 否则就是一个点进去必然 403 的空菜单。
    const noneVisible: NavVisibility = (meta) => !meta.requiredPolicy;
    const pruned = collectNavGroups(fakeRouter(buildRoutes()), noneVisible, "/admin");
    expect(pruned.flatMap((g) => g.items.map((i) => i.label))).toEqual(["首页"]);
  });

  it("不声明 nav 的路由不进菜单", () => {
    const labels = collectNavGroups(fakeRouter(buildRoutes()), allowAll, "/admin/profile").flatMap(
      (g) => g.items.map((i) => i.label),
    );
    expect(labels).not.toContain("个人信息");
  });
});

describe("面包屑标签索引", () => {
  it("nav 与 breadcrumb 声明都能被索引到", () => {
    const index = createRouteLabelIndex(fakeRouter(buildRoutes()));
    expect(index.byPath.get("/admin/identity/users")?.label).toBe("用户");
    expect(index.byPath.get("/admin/profile")?.label).toBe("个人信息");
    expect(index.byPath.get("/admin")).toBeUndefined();
  });

  it("固定路径优先于参数化路径", () => {
    const routes = [
      route("posts", "/posts", { nav: { label: "文章", group: "g", order: 1 } }),
      route("posts/new", "/posts/new", { nav: { label: "新建", group: "g", order: 2 } }),
      route("posts/$postId", "/posts/$postId", { nav: { label: "详情", group: "g", order: 3 } }),
    ];
    const index = createRouteLabelIndex(fakeRouter(routes));

    expect(matchRouteLabel(index, "/posts/new")?.label).toBe("新建");
    expect(matchRouteLabel(index, "/posts/abc123")?.label).toBe("详情");
    // 段数不同不匹配，否则 /posts/$postId 会吞掉 /posts/$postId/edit
    expect(matchRouteLabel(index, "/posts/abc123/edit")).toBeUndefined();
  });
});
