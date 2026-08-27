import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";

const TeacherSessionsPage = lazyRouteComponent(
  () => import("@/pages/classroom/teacher-sessions/TeacherSessionsPage"),
  "TeacherSessionsPage",
);

/** 我的课堂（/classroom/sessions）。导航由 ClassroomLayout 顶栏 Tab 渲染。 */
export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/sessions",
  component: TeacherSessionsPage,
  beforeLoad: createPermissionGuard("Classroom.Sessions.ViewDashboard"),
});
