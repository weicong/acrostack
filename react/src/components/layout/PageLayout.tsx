import { type ReactNode } from "react";
import { Divider, Text } from "@fluentui/react-components";

interface PageLayoutProps {
  title: string;
  children?: ReactNode;
}

/**
 * Unified page layout with a consistent title header and divider.
 * Use this in every page component for a uniform look.
 */
export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div>
      <Text as="h1" size={700} weight="bold">
        {title}
      </Text>
      <Divider />
      {children}
    </div>
  );
}
