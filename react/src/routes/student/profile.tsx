import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as studentRoute } from "./route";

const StudentProfilePage = lazyRouteComponent(
  () => import("@/pages/classroom/student-portal/StudentProfilePage"),
  "StudentProfilePage",
);

/** 我的资料页（/student/profile）：查看/编辑学员档案。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/profile",
  component: StudentProfilePage,
});
