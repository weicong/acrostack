import type { CSSProperties, ReactNode } from "react";
import type { RenderPreview } from "../types";
import { formatPreviewValue } from "../utils/formatPreviewValue";

type PreviewValueProps<TValue> = {
  value: TValue;
  emptyText: ReactNode;
  renderPreview?: RenderPreview<TValue>;
  formatter?: (value: TValue) => ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function PreviewValue<TValue>(props: PreviewValueProps<TValue>) {
  const formattedValue = formatPreviewValue(props.value, props.emptyText, props.formatter);

  if (props.renderPreview) {
    return (
      <>
        {props.renderPreview(props.value, {
          emptyText: props.emptyText,
          formattedValue,
        })}
      </>
    );
  }

  return (
    <span className={props.className} style={{ whiteSpace: "pre-wrap", ...props.style }}>
      {formattedValue}
    </span>
  );
}
