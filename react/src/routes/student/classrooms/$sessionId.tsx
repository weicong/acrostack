import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as studentRoute } from "../route";

const StudentClassroomHistoryPage = lazyRouteComponent(
  () => import("@/pages/classroom/student-portal/StudentClassroomHistoryPage"),
  "StudentClassroomHistoryPage",
);

/** 课堂答题记录页（/student/classrooms/:sessionId）：学员门户子页。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/classrooms/$sessionId",
  component: StudentClassroomHistoryPage,
});
