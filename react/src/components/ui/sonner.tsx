import { Toaster as FluentToaster } from "@fluentui/react-components";
import type { ToasterProps } from "@fluentui/react-components";

function Toaster(props: Partial<ToasterProps>) {
  return <FluentToaster {...props} />;
}

export { Toaster };
