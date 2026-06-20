import { createRootRoute } from "@tanstack/react-router";
import { makeStyles, Text } from "@fluentui/react-components";
import { RootLayout } from "@/components/layout/RootLayout";

const useNotFoundStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "50vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
});

function NotFoundComponent() {
  const styles = useNotFoundStyles();
  return (
    <div className={styles.root}>
      <Text as="h1" size={700} weight="bold">
        404
      </Text>
      <Text as="p" block>
        Page not found
      </Text>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
});
