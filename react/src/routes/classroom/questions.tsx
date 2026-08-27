import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";

const QuestionBankPage = lazyRouteComponent(
  () => import("@/pages/classroom/question-bank/QuestionBankPage"),
  "QuestionBankPage",
);

/** 题库管理（/classroom/questions）。导航由 ClassroomLayout 顶栏 Tab 渲染。 */
export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/questions",
  component: QuestionBankPage,
  beforeLoad: createPermissionGuard("Classroom.Questions.Manage"),
});
