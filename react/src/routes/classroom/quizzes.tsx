import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";

const QuizzesPage = lazyRouteComponent(
  () => import("@/pages/classroom/quizzes/QuizzesPage"),
  "QuizzesPage",
);

/** 试卷（/classroom/quizzes）。导航由 ClassroomLayout 顶栏 Tab 渲染。 */
export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/quizzes",
  component: QuizzesPage,
  beforeLoad: createPermissionGuard("Classroom.Quizzes.Manage"),
});
