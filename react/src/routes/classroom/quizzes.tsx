import { createRoute } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";
import { QuizzesPage } from "@/pages/classroom/quizzes/QuizzesPage";
import { createPermissionGuard } from "@/lib/routing/guards";

/** 试卷管理（/classroom/quizzes）。导航由 ClassroomLayout 顶栏 Tab 渲染。 */
export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/quizzes",
  component: QuizzesPage,
  beforeLoad: createPermissionGuard("Classroom.Quizzes.Manage"),
});
