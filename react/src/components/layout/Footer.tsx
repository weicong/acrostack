import { Divider, Text } from "@fluentui/react-components";
import { getApplicationName } from "@/lib/runtimeConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appName = getApplicationName();

  return (
    <footer>
      <Text size={200}>
        {currentYear}&copy; {appName}
      </Text>
      <Divider />
      <Text size={200}>ABP React UI v1.0</Text>
    </footer>
  );
}
