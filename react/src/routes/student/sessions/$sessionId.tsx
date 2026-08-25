import { createRoute } from "@tanstack/react-router";
import { Route as studentRoute } from "../route";
import { StudentSessionPage } from "@/pages/classroom/student-session/StudentSessionPage";

/** 学员答题页（/student/sessions/$sessionId）：实时作答 + 断线恢复。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/sessions/$sessionId",
  component: StudentSessionPage,
});
