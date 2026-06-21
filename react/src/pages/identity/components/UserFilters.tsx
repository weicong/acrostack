import { Input, Button, makeStyles } from "@fluentui/react-components";
import { AddRegular, SearchRegular, DismissRegular } from "@fluentui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    gap: "var(--spacingHorizontalS)",
    marginBlockEnd: "var(--spacingVerticalS)",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
});

type UserFiltersProps = {
  onFilterChange: (filter: string) => void;
  onCreateClick?: () => void;
};

export function UserFilters({ onFilterChange, onCreateClick }: UserFiltersProps) {
  const { t } = useTranslation();
  const [draft, setDraft] = useState("");
  const [applied, setApplied] = useState("");
  const styles = useStyles();

  const handleSearch = () => {
    const trimmed = draft.trim();
    setApplied(trimmed);
    onFilterChange(trimmed);
  };

  const handleReset = () => {
    setDraft("");
    setApplied("");
    onFilterChange("");
  };

  return (
    <div className={styles.toolbar}>
      <Input
        placeholder={t("AbpIdentity::Search")}
        value={draft}
        onChange={(_, data) => setDraft(data.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        contentAfter={
          <Button
            appearance="transparent"
            size="small"
            icon={<SearchRegular />}
            onClick={handleSearch}
            aria-label={t("AbpIdentity::Search")}
          />
        }
      />
      {applied && (
        <Button appearance="subtle" size="small" icon={<DismissRegular />} onClick={handleReset}>
          {t("AbpIdentity::Reset")}
        </Button>
      )}
      <div className={styles.spacer} />
      {onCreateClick && (
        <Button appearance="primary" icon={<AddRegular />} onClick={onCreateClick}>
          {t("AbpIdentity::NewUser")}
        </Button>
      )}
    </div>
  );
}
