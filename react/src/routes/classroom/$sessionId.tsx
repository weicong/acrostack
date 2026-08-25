import { createRoute } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";
import { TeacherDashboardPage } from "@/pages/classroom/teacher-dashboard/TeacherDashboardPage";
import { createPermissionGuard } from "@/lib/routing/guards";

/** 教师驾驶舱（/classroom/$sessionId）：实时统计 + 课堂控制 + 学员列表。
 * fullscreen：ClassroomLayout 检测后隐藏顶栏，统计大屏可用足屏宽度。 */
export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/$sessionId",
  component: TeacherDashboardPage,
  beforeLoad: createPermissionGuard("Classroom.Sessions.ViewDashboard"),
  staticData: { fullscreen: true },
});
