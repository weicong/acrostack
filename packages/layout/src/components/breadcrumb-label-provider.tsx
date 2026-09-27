import * as React from "react";

import { BreadcrumbLabelContext, type BreadcrumbOverrides } from "#hooks/use-breadcrumb-label";

export function BreadcrumbLabelProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = React.useState<BreadcrumbOverrides>({});

  const setOverride = React.useCallback((pattern: string, label: string | undefined) => {
    setOverrides((prev) => {
      if (label === undefined) {
        if (!(pattern in prev)) return prev;
        const next = { ...prev };
        delete next[pattern];
        return next;
      }
      if (prev[pattern] === label) return prev;
      return { ...prev, [pattern]: label };
    });
  }, []);

  const value = React.useMemo(() => ({ overrides, setOverride }), [overrides, setOverride]);

  return (
    <BreadcrumbLabelContext.Provider value={value}>{children}</BreadcrumbLabelContext.Provider>
  );
}
