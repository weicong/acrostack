import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";

import { HomePage } from "@/pages/home/HomePage";

export const Route = createFileRoute("/admin/")({
  component: HomePage,
  staticData: {
    nav: { label: "首页", group: "概览", icon: Home, order: 1 },
  },
});
