import type { ComponentType } from "react";
import { Home20Regular, Book20Regular, People20Regular } from "@fluentui/react-icons";

export interface RouteConfigItem {
  path: string;
  nameKey: string;
  icon?: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  order?: number;
  externalHref?: string | (() => string);
  externalTarget?: "_self" | "_blank";
  externalRel?: string;
  requiredPolicy?: string;
  requiresAuth?: boolean;
  children?: RouteConfigItem[];
}

export const routeConfig: RouteConfigItem[] = [
  { path: "/", nameKey: "Menu:Home", icon: Home20Regular, order: 1 },
  {
    path: "/books",
    nameKey: "Menu:Books",
    icon: Book20Regular,
    order: 3,
    requiredPolicy: "AcroStack.Books",
  },
  {
    path: "/identity/users",
    nameKey: "AbpIdentity::Users",
    icon: People20Regular,
    order: 5,
    requiredPolicy: "AbpIdentity.Users",
  },
];
