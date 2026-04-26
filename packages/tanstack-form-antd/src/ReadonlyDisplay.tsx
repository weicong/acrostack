import React from "react";
import type { SelectProps } from "antd";

export interface ReadonlyDisplayProps {
  value: any;
  type?: "text" | "select" | "date" | "switch" | "number";
  options?: SelectProps["options"];
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  placeholder?: string;
}

export function ReadonlyDisplay({
  value,
  type = "text",
  options,
  checkedChildren,
  unCheckedChildren,
  placeholder = "-",
}: ReadonlyDisplayProps) {
  if (value === undefined || value === null || value === "") {
    return <span style={{ color: "rgba(0, 0, 0, 0.25)" }}>{placeholder}</span>;
  }

  if (type === "select" && options) {
    const values = Array.isArray(value) ? value : [value];
    const labels = values
      .map((v) => {
        const option = options.find((opt) => opt.value === v);
        return option ? (option.label ?? option.value) : v;
      })
      .join(", ");
    return <span>{labels}</span>;
  }

  if (type === "switch") {
    return <span>{value ? (checkedChildren ?? "开启") : (unCheckedChildren ?? "关闭")}</span>;
  }

  if (type === "number") {
    return <span>{value}</span>;
  }

  return <span style={{ whiteSpace: "pre-wrap" }}>{String(value)}</span>;
}
