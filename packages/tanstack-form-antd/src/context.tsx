import { createContext, useContext } from "react";
import type { AntdFormContextValue } from "./types";

const defaultContextValue: AntdFormContextValue = {
  mode: "edit",
  errorDisplayMode: "touched",
};

export const AntdFormContext = createContext<AntdFormContextValue>(defaultContextValue);

export function useAntdFormContext(): AntdFormContextValue {
  return useContext(AntdFormContext);
}
