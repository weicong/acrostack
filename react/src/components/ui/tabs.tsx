import { TabList as FluentTabList, Tab as FluentTab } from "@fluentui/react-components";
import { type ReactNode } from "react";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

import { createContext, useContext, useCallback, useState } from "react";

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

export function Tabs({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  className: _className,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolledValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className: _className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  return (
    <FluentTabList
      selectedValue={ctx?.value}
      onTabSelect={(_, data) => ctx?.onValueChange(data.value as string)}
    >
      {children}
    </FluentTabList>
  );
}

export function TabsTrigger({
  value,
  children,
  className: _className,
}: {
  value: string;
  children?: ReactNode;
  className?: string;
}) {
  return <FluentTab value={value}>{children}</FluentTab>;
}

export function TabsContent({
  value,
  children,
  className: _className,
}: {
  value: string;
  children?: ReactNode;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <div>{children}</div>;
}
