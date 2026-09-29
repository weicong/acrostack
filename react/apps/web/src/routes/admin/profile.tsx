import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "@workspace/core";

import { ProfilePage } from "@/pages/account/ProfilePage";

/**
 * 个人信息页。**不进侧栏**——它从侧栏页脚的账户菜单进入（ABP 的约定是
 * 「个人信息」放在用户下拉里而不是导航菜单里），但仍声明 `breadcrumb`
 * 以便面包屑能给它一个名字。
 */
export const Route = createFileRoute("/admin/profile")({
  beforeLoad: authGuard,
  component: ProfilePage,
  staticData: {
    breadcrumb: { label: "个人信息" },
  },
});
