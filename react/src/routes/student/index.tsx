import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as studentRoute } from "./route";

const StudentMyClassroomsPage = lazyRouteComponent(
  () => import("@/pages/classroom/student-portal/StudentMyClassroomsPage"),
  "StudentMyClassroomsPage",
);

/** 学员门户首页（/student）：我的课堂列表。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/",
  component: StudentMyClassroomsPage,
});
