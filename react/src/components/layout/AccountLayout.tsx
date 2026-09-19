import { Link } from "@tanstack/react-router";
import { Text } from "@fluentui/react-components";
import type { ReactNode } from "react";

export function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Text as="p" size={200} block>
        <Link to="/">{"返回应用"}</Link>
      </Text>
    </div>
  );
}
