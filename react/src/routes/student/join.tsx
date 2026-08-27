import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as studentRoute } from "./route";

const StudentJoinPage = lazyRouteComponent(
  () => import("@/pages/classroom/student-join/StudentJoinPage"),
  "StudentJoinPage",
);

/** 学员加入页（/student/join?code=XXXXXX）：课堂码 + 昵称加入。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/join",
  component: StudentJoinPage,
});
